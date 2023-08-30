import React from 'react';
import {AddMessages} from "ui/pages/messages/chatPage/addMessages/AddMessages";
import {Messages} from "ui/pages/messages/Messages";

export const ChatPage = () => {
    return (
        <div>
            <AddMessages/>
            <Messages/>
        </div>
    );
};

