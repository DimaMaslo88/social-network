import React, {useEffect} from 'react';
import {useAppDispatch} from "bll/store";
import {useSelector} from "react-redux";
import {selectUserId, selectUserJob, selectUserName, selectUserPhotoSmall} from "bll/selectors/Selectors";
import s from 'styles/profile.module.scss'
import {Avatar} from "images/avatars/avatar";
import {Settings} from "images/icons/settings";
import {ToolTip} from "ui/components/universal/tooltip/ToolTip";
import {useNavigate} from "react-router-dom";
import style from 'styles/settings.module.scss'

export const Profile = () => {
    const dispatch = useAppDispatch()
    const userId = useSelector(selectUserId)
    const photoSmall = useSelector(selectUserPhotoSmall)
    const userName = useSelector(selectUserName)
    const userJob = useSelector(selectUserJob)
    const navigate = useNavigate()
    // useEffect(()=>{
    //     if(userId !== null){
    //         dispatch(GetProfile(userId))
    //     }
    //
    // },[])
const navigateHandler = ()=>{
        navigate('settings')
}
    return (
        <div className={s.profileContainer}>

            <div className={s.settings}  >
                <ToolTip text='Изменить настройки профиля'>
                    <Settings
                        onClick={navigateHandler}
                        width={50}
                        height={50}
                    />
                </ToolTip>
            </div>

            <h1> My profile</h1>
            <div className={s.avaBlock}>
                <div className={s.avatar}>{photoSmall === null ?
                    <Avatar
                        className={style.ava}
                        width={150}
                        height={150}

                    /> :
                    <div>
                        {photoSmall}
                    </div>
                }
                    {!userJob ? <p className={s.p}># OpenToWork</p> : <h3>{userJob}</h3>}
                </div>
                <h3> {userName}</h3>


            </div>
        </div>
    );
};

