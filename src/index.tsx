import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/navbar';
import { Login } from './Pages/Login/Login'

import init from './pkg/wasm'

init("/app/wasm_bg.wasm").then(() => {
    console.log("wasm loaded")
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
      );
      root.render(
        <React.StrictMode>
          <NavBar></NavBar>
          <BrowserRouter basename='/app'>
            <Routes>
                <Route path='/' element={<App></App>}/>
                <Route path='/login' element={<Login></Login>}/>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
