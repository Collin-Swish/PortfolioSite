import React, { MouseEvent, MutableRefObject, useRef, useState } from 'react'
import { useEffect } from 'react'
import { Board, Cell } from 'wasm'
import Vec2 from '../classes/vec2'

const scale: Cell = new Cell(BigInt(10), BigInt(10));



// class State {
//     constructor(width: number, height: number, tile_size: number) {
//         this.cells = []
//         this.board = createBoard();
//     }
//     cells: Cell[];
//     board: Board;
// }

interface Props {
    className?: string;
    cells?: Vec2[] | undefined | string;
}

export function Conways(props: Props) {
    let tile_size = 30;
    const scale: Vec2 = new Vec2(tile_size, tile_size);
    const canvas = useRef<HTMLCanvasElement>(null)
    const board: MutableRefObject<Board> = useRef(createBoard(props.cells))
    const [timeout, setTime] = useState(600);
    const [speed, setSpeed] = useState(1);
    const [running, setRunning] = useState(false);
    const [running_str, setRunning_str] = useState("Play");
    const [Save, setSave] = useState<Board>(board.current)
    // const state: MutableRefObject<State> = useRef(new State());
    useEffect(() => {
        let cells: Cell[] = board.current.get_cells();
        drawCells(canvas.current?.getContext("2d")!, cells);
        if(!running) {
            return;
        }

        //Implementing the setInterval method
        const interval = setInterval(() => {
            let context = canvas.current?.getContext("2d")!;
            let cells: Cell[] = board.current.get_cells();
            drawCells(context, cells);
            board.current.evaluate();
        }, timeout);
        
      

        //Clearing the interval
        return () => clearInterval(interval);
    }, [timeout, running]);

    const press_button = () => {
        setRunning_str(running ? "Play" : "Pause")
        setRunning(!running);
    }

    const canvas_click = (event: MouseEvent) => {
        let rect: DOMRect = event.currentTarget.getBoundingClientRect();
        // let _state = state.current;
        let _canvas = canvas.current!;
        let scalingX: number = rect.width / _canvas.width;
        let scalingY: number = rect.height / _canvas.height;
        let x: number = event.clientX - rect.left;
        let y: number = event.clientY - rect.top;
        x /= (scale.x * scalingX);
        y /= (scale.y * scalingY);
        x = Math.floor(x);
        y = Math.floor(y);
        let _board: Board = board.current;
        _board.toggle(x, y);
        drawCells(_canvas.getContext("2d")!, _board.get_cells())
        console.log(`Click event x:${x} y:${y}`);
    }

    const drawCells = (ctx: CanvasRenderingContext2D, cells: Cell[]) => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black"
        let scale_cell = scale.to_cell()
        for(let i = 0; i < cells.length; i++) {
            let position = cells[i].mul(scale_cell);
            ctx.fillRect(Number(position.x), Number(position.y), scale.x, scale.y);
            ctx.strokeRect(Number(position.x), Number(position.y), scale.x, scale.y);
        }
        drawGrid(ctx, scale);
    }

    const output = () => {
        let cells = board.current.get_cells();
        let str = "";
        for(let i = 0; i < cells.length; i++) {
            str += `${cells[i].x} ${cells[i].y},`
        }
        console.log(str);
    }

    const clear = () => {
        board.current = Board.default();
        drawCells(canvas.current?.getContext("2d")!, board.current.get_cells())
    }

    const save = () => {
        setSave(board.current.copy());
    }
    const load = () => {
        board.current = Save.copy();
        drawCells(canvas.current?.getContext("2d")!, board.current.get_cells())
    }

    return (
        <>
        <div className={props.className}>
            <div className='flex content-center flex-col h-fit'>
                <canvas ref={canvas} width={1200} height={1200} style={{border: "1px solid white"}} className=' my-1 md:w-1/2 mx-auto' onClick={canvas_click} ></canvas>
                <div className=' mb-10 flex md:w-1/2 mx-auto'>
                    <button  onClick={press_button} className=' mx-auto border-4 border-gray-700 p-4 rounded-xl'>{running_str}</button>
                    <button className=' mx-auto border-4 border-gray-700 p-4 rounded-xl' onClick={clear}>Clear</button>
                    {/* <button className='mx-auto border-4 border-gray-700 p-4 rounded-xl' onClick={output}>Output</button> */}
                    <button className='mx-auto border-4 border-gray-700 p-4 rounded-xl' onClick={save}>Save</button>
                    <button className='mx-auto border-4 border-gray-700 p-4 rounded-xl' onClick={load}>Load</button>
                    <span className=' mx-auto my-auto'>
                    <input type="range" defaultValue={1} min={1} max={100} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        let value = 800 - (event.target.valueAsNumber * 8);
                        setTime(value);
                        setSpeed(event.target.valueAsNumber);
                    }} /> <span>{speed} speed</span>
                    </span>
                </div>
            </div>
        </div>
        
        </>
    )
}

function drawGrid(ctx: CanvasRenderingContext2D, scale: Vec2) {
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    ctx.beginPath();
    ctx.strokeStyle = "lightgrey"
    for(let i = 0; i < width; i += scale.x) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
    }
    for(let i = 0; i < height; i += scale.y) {
        ctx.moveTo(0,i);
        ctx.lineTo(width, i);
    }
    ctx.stroke();
}

function createBoard(cells: Vec2[] | undefined | string): Board {
    let board = Board.default();
    if(cells == undefined) {
        return board;
    }
    if(typeof cells == "string") {
        cells = str_to_vec2(cells);
    }
    for(let i = 0; i < cells.length; i++) {
        board.set(cells[i].x, cells[i].y);
    }
    return board;
}

function str_to_vec2(input: string) {
    
    let items: string[] = input.split(",")
    // Remove trailing comma
    if(items[items.length - 1] == "") {
        items.pop();
    }
    let list: Vec2[] = []
    for(let i = 0; i < items.length; i++) {
        let numbers: string[] = items[i].split(" ");
        let x: number = Number(numbers[0]);
        let y: number = Number(numbers[1]);
        list.push(new Vec2(x, y));
    }
    return list;
}

// function drawCells(ctx: CanvasRenderingContext2D, cells: Cell[]) {
//     let scale: Cell = new Cell(BigInt(10), BigInt(10));
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, 400, 400);
//     ctx.fillStyle = "black"
//     for(let i = 0; i < cells.length; i++) {
//         let position = cells[i].mul(scale)
//         ctx.fillRect(Number(position.x), Number(position.y), 10, 10);
//         ctx.strokeRect(Number(position.x), Number(position.y), 10, 10);
//     }
//     drawGrid(ctx, 10);
// }