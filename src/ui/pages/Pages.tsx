import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PATH} from "ui/enum/Path";
import {ChatPage} from "ui/pages/messages/chatPage/ChatPage";
import {Login} from "ui/pages/authorization/login/Login";
import {Profile} from "ui/pages/profile/profile";
import style from 'styles/pages.module.scss'
import {Settings} from "ui/pages/profile/settings/settings";
import {UsersPage} from "ui/pages/community/UsersPage";

export const Pages = () => {
    return (
        <div className={style.pagesContainer}>
            <Routes>
                <Route path={PATH.chat} element={<ChatPage/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={`${PATH.profile}/settings`} element={<Settings/>}/>
                <Route path={PATH.users} element={<UsersPage/>}/>
            </Routes>
        </div>
    );
};

