use conways::board;
use conways::cell;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-game-of-life!");
}