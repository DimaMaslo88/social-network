import React from 'react';
import {NavLink} from "react-router-dom";
import style from 'styles/navBar.module.scss'
import House from "images/icons/House";
import Message from "images/icons/message";
import Gear from "images/icons/gear";
import {Title} from "ui/components/universal/NavTitle";
import {Peoples} from "images/icons/peoples";

export const NavBar = () => {
    return (
        <div className={style.navbarContainer}>
            <div className={style.navbarContent}>
                <House width="32" height="32"/>
                <div className={style.titleNavStyle}><Title title='Главная'/></div>
            </div>
            <div className={style.navbarContent}>
                <Message width="32" height="32"/>
                <div className={style.titleNavStyle}><NavLink to="/chat"><Title title="Сообщения"/></NavLink></div>
            </div>
            <div className={style.navbarContent}>
                <Peoples width="32" height="32"/>
                <div className={style.titleNavStyle} ><NavLink to="/community"><Title title='Участники'/></NavLink></div>
            </div>
            <div className={style.navbarContent}>
                <Gear width="32" height="32"/>
                <div className={style.titleNavStyle} ><Title title="Настройки"/></div>
            </div>

        </div>
    );
};

