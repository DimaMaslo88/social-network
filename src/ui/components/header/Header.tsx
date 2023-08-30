import React from 'react';
import style from "styles/header.module.scss"
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    const navigateToLogin = ()=>{
      navigate('login')
    }
    return (
        <div className={style.headerContainer}>
            <div className={style.button}>
                <button onClick={navigateToLogin}>Войти</button>
            </div>

        </div>
    );
};

