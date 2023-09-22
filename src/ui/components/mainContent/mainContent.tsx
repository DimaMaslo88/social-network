import React from 'react';
import {NavBar} from "ui/components/navBar/NavBar";
import {Pages} from "ui/pages/Pages";
import style from 'styles/mainContent.module.scss'

export const MainContent = () => {
    return (
        <div className={style.mainContentContainer}>
            <NavBar/>
            <Pages/>
        </div>
    );
};


