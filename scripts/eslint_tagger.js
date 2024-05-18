import * as fs from 'fs'

let data = "/* eslint-disable */\n" + await fs.promises.readFile("src/pkg/wasm.js", { encoding: "utf8" })
await fs.promises.rm("src/pkg/wasm.js")
await fs.promises.writeFile("src/pkg/wasm.js", data);