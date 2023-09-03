import React from 'react';
import style from "styles/header.module.scss"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuthUser} from "bll/selectors/Selectors";
import {useAppDispatch} from "bll/store";
import {LogOut} from "bll/reducers/authReducer";

export const Header = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuthUser)
    const navigateToLogin = () => {
        navigate('login')
    }
const logOutHandler =()=>{
        dispatch(LogOut())
}
    return (
        <div className={style.headerContainer}>
            <div className={style.button}>
                {!isAuth ? <button onClick={navigateToLogin}>Войти</button> :
                    <button onClick={logOutHandler}>Выйти</button>}

            </div>

        </div>
    );
};

