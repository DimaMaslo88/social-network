import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {PATH} from "ui/enum/Path";
import {ChatPage} from "ui/pages/messages/chatPage/ChatPage";
import {Login} from "ui/pages/authorization/login/Login";


export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.chat} element={<ChatPage/>}/>
                <Route path={PATH.login} element={<Login/>}/>
            </Routes>
        </div>
    );
};

