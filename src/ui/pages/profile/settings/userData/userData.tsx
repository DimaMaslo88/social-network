import React from 'react';
import style from "styles/login.module.scss";
import {useFormik} from "formik";
import {LoginUser} from "bll/reducers/authReducer";
import {Input} from "ui/components/universal/input/Input";

export const UserData = () => {
    const formik = useFormik({
        initialValues:{
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: '',
                large: ''
            }
        },
        onSubmit: (values) => {
           console.log(values)
            formik.resetForm()
        }

    })
    return (
        <form onSubmit={formik.handleSubmit} >
        <div>
<Input/>
<Input/>
<Input/>
<Input/>
        </div>
        </form>
    );
};

