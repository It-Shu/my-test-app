import React from 'react';
import './App.css';
import {TableData} from "./components/Table/TableData";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {Navbar} from "./Navbar/Navbar";

function App() {

    return (
        <BrowserRouter>
             <Navbar/>
             <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;



