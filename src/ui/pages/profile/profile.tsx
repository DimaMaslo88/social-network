import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {useSelector} from "react-redux";
import {selectUserId, selectUserName} from "bll/selectors/Selectors";
import {GetProfile} from "bll/reducers/userReducer";

export const Profile = () => {
    const dispatch = useAppDispatch()
    const userId = useSelector(selectUserId)
    const userName = useSelector(selectUserName)
    useEffect(()=>{
        if(userId !== null){
            dispatch(GetProfile(userId))
        }

    },[userId,userName])
    return (
        <div>
            My profile
<h1>{`Hi, My name is ${userName}`}</h1>
        </div>
    );
};

