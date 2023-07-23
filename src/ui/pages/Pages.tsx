import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {PATH} from "ui/enum/Path";
import {Messages} from "ui/pages/messages/Messages";


export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.messages} element={<Messages/>}/>
            </Routes>
        </div>
    );
};

