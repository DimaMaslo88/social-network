import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {useSelector} from "react-redux";
import {selectUserId, selectUserJob, selectUserName, selectUserPhotoSmall} from "bll/selectors/Selectors";
import s from 'styles/profile.module.scss'
import {Avatar} from "images/avatars/avatar";
import {Settings} from "images/icons/settings";
import {ToolTip} from "ui/components/universal/tooltip/ToolTip";


export const Profile = () => {
    const dispatch = useAppDispatch()
    const userId = useSelector(selectUserId)
    const photoLarge = useSelector(selectUserPhotoSmall)
    const userName = useSelector(selectUserName)
    const userJob = useSelector(selectUserJob)
    // useEffect(()=>{
    //     if(userId !== null){
    //         dispatch(GetProfile(userId))
    //     }
    //
    // },[])
    return (
        <div className={s.profileContainer}>

            <div className={s.settings} >
                <ToolTip text='Изменить настройки профиля'>
            <Settings
                width={50}
                height={50}
            />
                </ToolTip>
            </div>

            <h1> My profile</h1>
            <div className={s.avaBlock}>
                <div className={s.avatar}>{photoLarge === null ?
                    <Avatar
                        className={s.ava}
                        width={150}
                        height={150}

                    /> :
                    <div>
                        photoLarge
                    </div>
                }
                    {!userJob ? "OpenToWork" : <h3>{userJob}</h3>}
                </div>
                <h3> {userName}</h3>


            </div>
        </div>
    );
};

