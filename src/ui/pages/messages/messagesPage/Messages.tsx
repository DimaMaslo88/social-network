import React from 'react';
import {useSelector} from "react-redux";
import {selectMessage} from "bll/selectors/Selectors";
import style from 'styles/messages.module.scss';
import { Message } from './singleMessgePage/Message';

export const Messages = () => {
   
    return (
        <div>

        <div className={style.messages}>
           <Message />

        </div>
        </div>
    );
};

