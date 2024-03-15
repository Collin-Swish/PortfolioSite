import React, { useState } from 'react';
import './App.css';
import { NavBar } from './Components/navbar'
import { Intro } from './Components/intro'
import { Conways } from './Components/conways'

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
            <div className=' mx-auto'>
                <Conways></Conways>
            </div>
        </main>       
    </>
    );
}

export default App;
