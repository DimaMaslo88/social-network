import React from 'react';
import {useSelector} from "react-redux";
import {selectUserPhotoLarge} from "bll/selectors/Selectors";
import {Avatar} from "images/avatars/avatar";
import s from "styles/settings.module.scss";
import {Input} from "ui/components/universal/input/Input";
import {UserData} from "ui/pages/profile/settings/userData/userData";

export const Settings = () => {
    const photoLarge = useSelector(selectUserPhotoLarge)

    return (
        <div className={s.settingBlock}>
            { photoLarge === null ?
                <Avatar
                className={s.ava}
                width={350}
                height={350}

                />:
                <div>
                    {photoLarge}
                </div>
            }
            <div>
                <UserData/>
            </div>
        </div>
    );
};

