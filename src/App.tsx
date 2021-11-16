import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {GetTable} from "./Navbar/GetTable";

function App() {

    return (
        <BrowserRouter>
             <GetTable/>
             <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;



