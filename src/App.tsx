import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "ui/components/header/Header";
import {NavBar} from "ui/components/navBar/NavBar";
import {Pages} from "ui/pages/Pages";
import style from 'styles/contentContainer.module.scss'
import {InitializeUser} from "bll/reducers/authReducer";
import {useAppDispatch} from "bll/store";
import {useSelector} from "react-redux";
import {selectIsAuthUser} from "bll/selectors/Selectors";
import {useNavigate} from "react-router-dom";
import {Login} from "ui/pages/authorization/login/Login";
import {MainContent} from "ui/components/mainContent/mainContent";

function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuthUser)
    useEffect(() => {
        dispatch(InitializeUser())
    }, [])
    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])
    return (
        <div className='main-container'>
            <Header/>
            <div className={style.contentContainer}>
                {isAuth ? (
                    <MainContent/>
                ) : <div className={style.loginContent}>
                    <Login/>
                </div>
                }


            </div>

        </div>
    );
}

export default App;
