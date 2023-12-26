import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {GetUsers} from "bll/reducers/usersReducer";
import {useSelector} from "react-redux";
import {selectUsers} from "bll/selectors/Selectors";
import {ItemsType} from "types/types";

export const UsersPage = () => {
    const dispatch = useAppDispatch()
    const users = useSelector(selectUsers)
useEffect(()=>{
   dispatch(GetUsers())
},[])
    return (
        <div>
            {users.map((user:ItemsType)=>
                <div key={user.id}>
                 <div>{user.name}</div>
                </div>

            )}
        </div>
    );
};

