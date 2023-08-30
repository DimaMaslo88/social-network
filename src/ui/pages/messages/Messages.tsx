import React from 'react';
import {useSelector} from "react-redux";
import {selectMessage} from "bll/selectors/Selectors";


export const Messages = () => {
    const messages = useSelector(selectMessage)
    return (
        <div style={{height:'200px',overflowY:'auto'}}>
            {messages.map(message =>
                <div >
                {message}
            </div>)}

        </div>
    );
};

