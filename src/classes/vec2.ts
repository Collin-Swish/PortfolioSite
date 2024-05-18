import { Cell } from '../pkg/wasm'

export default class Vec2 {
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    x: number;
    y: number;
    to_cell(): Cell {
        return new Cell(BigInt(this.x), BigInt(this.y));
    }
}