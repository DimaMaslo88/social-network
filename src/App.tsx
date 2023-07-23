import React from 'react';
import './App.scss';
import {Header} from "ui/components/header/Header";
import {NavBar} from "ui/components/navBar/NavBar";
import {Pages} from "ui/pages/Pages";
import style from 'styles/contentContainer.module.scss'

function App() {
    return (
        <div className='main-container'>
            <Header/>
            <div className={style.contentContainer}>
                <NavBar/>
                <Pages/>
            </div>

        </div>
    );
}

export default App;
