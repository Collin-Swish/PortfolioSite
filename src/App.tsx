import React, { useState } from 'react';
import './App.css';
import { NavBar } from './Components/navbar'
import { Intro } from './Components/intro'
import { Conways } from './Components/conways'
import Vec2 from './classes/vec2';

function App() {
    return (
    <>
        <NavBar></NavBar>
        <main className="md:w-3/4 sm:w-screen m-auto mx-auto">
            <Intro></Intro>
            <div className="md:mx-auto w-3/4 flex md:flex-row sm:flex-col sm:mx-auto sm:py-8 md:my-12" style={{marginTop: 50, borderTop: "solid grey 2px", paddingTop: "5px"}}>
                <div className="md:w-1/2 mx-auto ">
                    <h1 className="text-2xl ">Skills</h1>
                    <ul className="list-disc">
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
                <div className="md:w-1/2 mx-auto my-12">
                    
                </div>
            </div>
            <div className=' mx-auto h-2'>
                <Conways cells={"10 10,11 11,12 11,13 10,12 9,11 9,10 9,"}></Conways>
                <div className='mx-auto my-10 text-center'>
                    This fully functional implementation of conways game of life uses a number of different technologies. 
                    The internal logic and state management was written in Rust as can be seen in this <a style={{textDecoration:"underline", color: "#007FFF"}} className='font-medium text-blue-600  hover:underline' href="https://remote.collinswisher.net/gitbucket/Collin/GameOfLife">repo</a>.
                    The board is rendered on a canvas controlled by javascript.    
                </div><br />
            </div>
        </main>       
    </>
    );
}

export default App;
