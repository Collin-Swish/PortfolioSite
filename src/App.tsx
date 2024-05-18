import React, { useState } from 'react';
import { isMobile } from 'react-device-detect'
import './App.css';
import { Intro } from './Components/intro'
import { Conways } from './Components/conways'

function App() {
    let condata = ""
    if(isMobile) {
        condata = "10 9,11 11,14 12,10 13,10 8,6 10,8 14,8 9,8 15,5 12,13 12,4 11,12 10,10 7,7 11,5 10,12 12,8 8,8 13,14 11,9 10,6 12,4 10,9 7,9 12,10 14,9 15,13 10,"
    }
    else condata = "2 2,37 1,1 0,24 21,21 15,20 14,0 2,1 39,37 37,1 2,1 37,15 19,2 38,25 19,37 2,23 20,21 25,19 24,20 17,16 21,38 39,39 2,17 20,19 16,26 20,20 26,38 2,19 15,24 19,37 38,0 37,21 24,20 23,16 19,19 25,15 21,14 20,2 37,21 16,2 1,39 37,38 0,38 37,25 21,"
    // else condata = "2 2,3 2,24 21,21 15,20 14,37 37,1 2,15 19,25 19,2 0,21 25,19 24,23 19,23 20,20 17,16 21,17 20,19 16,26 20,21 23,17 21,20 26,3 1,19 15,24 19,21 24,20 23,16 19,19 25,15 21,19 17,14 20,36 37,21 16,36 38,37 39,38 37,25 21,"
    return (
    <>
        {/* <NavBar></NavBar> */}
        <main className="md:w-3/4 sm:w-screen m-auto mx-auto">
            <Intro></Intro>
            <div className="md:mx-auto w-3/4 flex md:flex-row sm:flex-col sm:mx-auto sm:py-8 md:my-12" style={{marginTop: 50, borderTop: "solid grey 2px", paddingTop: "5px"}}>
                <div className="md:w-1/2 mx-2">
                    <h1 className="text-2xl">Skills</h1>
                    <ul className="">
                        <li>Database Management</li>
                        <li>Test Automation</li>
                        <li>Application Development</li>
                        <li>Web Servers</li>
                        <li>Interpersonal Skills</li>
                        <li>Information Security</li>
                        <li>Critical Thinking</li>
                        <li>Networking</li>
                        <li>Web Assembly</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mx-4">
                <h1 className="text-2xl ">Programming languages</h1>
                    <ul>
                        <li>Javascript</li>
                        <li>Rust</li>
                        <li>Typescript</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Lua</li>
                        <li>Bash</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mx-4">
                <h1 className="text-2xl ">Has experience with</h1>
                <ul>
                    <li>React</li>
                    <li>Blazor</li>
                    <li>Jquery</li>
                    <li>Rocket-rs</li>
                    <li>Express-js</li>
                    <li>Discord api</li>
                    <li>Progressive web apps</li>
                    <li>Tailwind</li>
                    <li>Webpack</li>
                </ul>
                </div>
            </div>
            <div className=' mx-auto sm:w-3/4 '>
                <br />
                <div style={{textAlign: "center"}}>
                    <p className=' text-2xl'>Conways Game of Life</p>
                    <span >Click on the grid to add or remove a tile. Then press play to start the simulation</span>

                </div>
                <br />
                <Conways cells={condata}></Conways>
                <div style={{textAlign: "center"}} className='mx-auto my-10 text-center sm:w-3/4'>
                    
                    <br />
                    <br />
                    This fully functional implementation of conways game of life uses a number of different technologies. 
                    The internal logic and state management was written in Rust as can be seen in this <a style={{textDecoration:"underline", color: "#007FFF"}} className='font-medium text-blue-600  hover:underline' href="https://remote.collinswisher.net/gitbucket/Collin/GameOfLife">repo</a>.
                    The Rust was compiled to web assembly, javascript bindings were created using wasm-bindgen and the whole project was packaged using webpack.
                    The board is rendered on a canvas controlled by javascript/react.
                </div><br />
            </div>
        </main>       
    </>
    );
}

export default App;
