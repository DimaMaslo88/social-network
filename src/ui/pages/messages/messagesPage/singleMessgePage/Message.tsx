import React from 'react';
import style from "styles/messages.module.scss";
import {useSelector} from "react-redux";
import {selectMessage} from "bll/selectors/Selectors";

export const Message = () => {
    const messages = useSelector(selectMessage)
    return (
        <div>
            {messages.map(message =>
                <ul  >
                   <li className={style.message}>{message}</li>
                </ul>)}
        </div>
    );
};

