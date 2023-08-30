import {useAppDispatch} from 'bll/store';
import React, {ChangeEvent, useState} from 'react';
import {setMessages} from "bll/actions/messagesActions";

export const AddMessages = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)

    }
    const setMessageHandler = () => {
        dispatch(setMessages(value))
        setValue('')
    }
    return (
        <div>
            <div>
                <textarea
                    value={value}
                    onChange={onChangeValueHandler}/>
            </div>
            <div>
                <button onClick={setMessageHandler}>Отправить</button>
            </div>

        </div>
    );
};

