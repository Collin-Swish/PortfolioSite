import React, { MouseEvent, MutableRefObject, useRef, useState } from 'react'
import { useEffect } from 'react'
import { Board, Cell } from 'wasm'

const scale: Cell = new Cell(BigInt(10), BigInt(10));

class State {
    constructor() {
        this.cells = []
        this.pixel_center = new Cell(BigInt(200), BigInt(200));
        this.center = new Cell(BigInt(20), BigInt(20));
        this.board = createBoard();
    }
    cells: Cell[];
    pixel_center: Cell;
    center: Cell;
    board: Board;
}

export function Conways() {
    const canvas = useRef<HTMLCanvasElement>(null)
    const board: MutableRefObject<Board> = useRef(createBoard())
    const [timeout, setTime] = useState(600);
    const [speed, setSpeed] = useState(1);
    const [running, setRunning] = useState(false);
    const [running_str, setRunning_str] = useState("Play");
    const state: MutableRefObject<State> = useRef(new State());
    useEffect(() => {
        let cells: Cell[] = board.current.get_cells();
        drawCells(canvas.current?.getContext("2d")!, cells);
        if(!running) {
            return;
        }

        //Implementing the setInterval method
        const interval = setInterval(() => {
            let context = canvas.current?.getContext("2d")!;
            let cells: Cell[] = board.current.get_cells()
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
        let scaling: number = rect.width / 400;
        let x: number = event.clientX - rect.left;
        let y: number = event.clientY - rect.top;
        x /= (10 * scaling);
        y /= (10 * scaling);
        x = Math.floor(x);
        y = Math.floor(y);
        x -= 20;
        y -= 20;
        let _board: Board = board.current;
        _board.toggle(x, y);
        drawCells(canvas.current?.getContext("2d")!, _board.get_cells())
        console.log(`Click event x:${x} y:${y}`);
    }

    const draw_Cells = (ctx: CanvasRenderingContext2D, cells: Cell[]) => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 400, 400);
        ctx.fillStyle = "black"
        for(let i = 0; i < cells.length; i++) {
            let position = cells[i].mul(scale).add(state.current.pixel_center);
            ctx.fillRect(Number(position.x), Number(position.y), 10, 10);
            ctx.strokeRect(Number(position.x), Number(position.y), 10, 10);
        }
        drawGrid(ctx);
    }

    return (
        <>
        <div className='flex content-center flex-col'>
            <canvas ref={canvas} width={400} height={400} style={{border: "1px solid white"}} className=' my-1' onClick={canvas_click} ></canvas>
            <div className=' mb-10 flex'>
                <button  onClick={press_button} className=' mx-auto border-4 border-gray-700 p-4 rounded-xl'>{running_str}</button>
                <span className=' mx-auto my-auto'>
                <input type="range" defaultValue={1} min={1} max={100} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    let value = 800 - (event.target.valueAsNumber * 8);
                    setTime(value);
                    setSpeed(event.target.valueAsNumber);
                }} /> <span>{speed} speed</span>
                </span>
            </div>
        </div>
        
        </>
    )
}

function drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = "lightgrey"
    for(let i = 0; i < 400; i+=10) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i,400);
        ctx.moveTo(0,i);
        ctx.lineTo(400,i);
    }
    ctx.stroke();
}

function create_coordinate(coord: number, offset: number): number {
    let x = coord - offset;
    x = Math.floor(x);
    x /= 10;
    x = Math.floor(x);
    x -= 20;
    return x;
}

function createBoard(): Board {
    let board = Board.default();
    board.set(0,1);
    board.set(1,0);
    board.set(2,0);
    board.set(1,2);
    board.set(2,2);
    board.set(3,1);
    board.set(0,0);
    board.set(-9,-9);
    board.set(-9,-10);
    board.set(-9,-11);
    board.set(-10,-9);
    board.set(-11,-10);
    board.set(10,-10);
    board.set(10,-11);
    board.set(10,-12);
    return board;
}

function drawCells(ctx: CanvasRenderingContext2D, cells: Cell[]) {
    let scale: Cell = new Cell(BigInt(10), BigInt(10));
    let center = new Cell(BigInt(200), BigInt(200));
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 400, 400);
    ctx.fillStyle = "black"
    for(let i = 0; i < cells.length; i++) {
        let position = cells[i].mul(scale).add(center);
        ctx.fillRect(Number(position.x), Number(position.y), 10, 10);
        ctx.strokeRect(Number(position.x), Number(position.y), 10, 10);
    }
    drawGrid(ctx);
}