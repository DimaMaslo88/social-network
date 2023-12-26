import {useAppDispatch} from 'bll/store';
import React, {ChangeEvent, useState} from 'react';
import {setMessages} from "bll/actions/messagesActions";
import style from 'styles/addMessages.module.scss'
import {CreatePost} from "bll/reducers/messagesReducer";
import {useSelector} from "react-redux";
import {selectUserId} from "bll/selectors/Selectors";

export const AddMessages = () => {
    const dispatch = useAppDispatch()
    const userId = useSelector(selectUserId)
    const [value, setValue] = useState('')
    const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)

    }
    const CreatePostHandler = () => {
        dispatch(setMessages(value))
        setValue('')
    }
    return (
        <div>
            <h3>Напишите сообщение</h3>
            <div className={style.textAreaBlock}>
                <textarea
                    value={value}
                    maxLength={200}
                    rows={4}
                    cols={20}
                    className={style.textArea}
                    onChange={onChangeValueHandler}/>
            </div>
            <div>
                <button onClick={CreatePostHandler} disabled={!value}>Отправить</button>
            </div>

        </div>
    );
};

