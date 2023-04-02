import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Fakeapi from './Fakeapi';
//import App from './App'
import Sample from './Sample';
//import {BrowserRouter}from "react-router-dom"

//import { UsercontextProvider } from './context/UserContext';
import "./index.js"


const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Sample /> */}
        <Fakeapi/>
      
    </React.StrictMode>
)