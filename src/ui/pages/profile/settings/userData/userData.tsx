import React from 'react';
import style from 'styles/login.module.scss';
import { useFormik } from 'formik';
import { LoginUser } from 'bll/reducers/authReducer';
import { Input } from 'ui/components/universal/input/Input';
import {Button} from "ui/components/universal/button/Button";

type FormikErrorType= {
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  contacts?: {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
  }
}
export const UserData = () => {
  const formik = useFormik({
    initialValues: {
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '', // ссылка на email
        youtube: '',
        mainLink: '', // ссылка на телеграм
      },
    },
    validate:(values) => {
const errors:FormikErrorType={}

    },
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input placeholder="Введите никнэйм" />
        <Input placeholder="website" />
        <Input placeholder="Введите статус " />
        <Input placeholder="Ожидание от работы" />
        <Input placeholder="Ссылка на GitHub" />
        <Input placeholder="Ссылка на VK" />
        <Input placeholder="facebook" />
        <Input placeholder="twitter" />
        <Input placeholder="youtube" />
        <Input placeholder="telegram" />
      </div>
      <Button>
        Изменить
      </Button>
    </form>
  );
};

