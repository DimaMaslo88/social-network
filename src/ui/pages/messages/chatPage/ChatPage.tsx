import React from 'react';
import {AddMessages} from "ui/pages/messages/chatPage/addMessages/AddMessages";
import {Messages} from "ui/pages/messages/messagesPage/Messages";
import style from 'styles/chatPage.module.scss'

export const ChatPage = () => {
    return (
        <div className={style.chatPageBlock}>
            <AddMessages/>
            <Messages/>
        </div>
    );
};

