import React from 'react';
import './App.scss';
import {Header} from "ui/components/header/Header";
import {NavBar} from "ui/components/navBar/NavBar";

function App() {
    return (
        <div className='main-container'>
            <Header/>
            <NavBar/>
        </div>
    );
}

export default App;
