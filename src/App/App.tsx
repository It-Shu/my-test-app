import React from 'react';
import '../App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {StartPage} from "../pages/StartPage/StartPage";

function App() {

    return (
        <BrowserRouter>
             <StartPage/>
             <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;



