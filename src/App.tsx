import React, {useEffect} from 'react';
import {Header} from "ui/components/header/Header";
import style from 'styles/contentContainer.module.scss'
import {InitializeUser} from "bll/reducers/authReducer";
import {useAppDispatch} from "bll/store";
import {useSelector} from "react-redux";
import {selectAppStatus, selectIsAuthUser} from "bll/selectors/Selectors";
import {useNavigate} from "react-router-dom";
import {Login} from "ui/pages/authorization/login/Login";
import {MainContent} from "ui/components/mainContent/mainContent";
import {Footer} from "ui/components/footer/Footer";
import {RotatingLines} from "react-loader-spinner";
import s from './App.module.scss'

function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuthUser)
    const status = useSelector(selectAppStatus)
    useEffect(() => {
        dispatch(InitializeUser())
    }, [])
    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])
    return (
        <div className={s.mainContainer}>
            <Header/>
            {status && <div className={s.spinner}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="4"
                    animationDuration="0.75"
                    width="76"
                />
                <div>
                    Идет загрузка ...
                </div>
            </div>}
            <div className={style.contentContainer}>
                {isAuth ? (
                    <MainContent/>
                ) : <div className={style.loginContent}>
                    <Login/>
                </div>
                }
            </div>
            <div className={s.footerContainer}>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
