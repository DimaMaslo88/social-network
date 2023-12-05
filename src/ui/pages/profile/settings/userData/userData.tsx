import React from 'react';
import { useFormik } from 'formik';
import { Input } from 'ui/components/universal/input/Input';
import { Button } from 'ui/components/universal/button/Button';
import s from 'styles/login.module.scss';
import { Checkbox } from 'ui/components/universal/checkbox/Checkbox';
import style from 'styles/checkbox.module.scss';
import { UpdateUserData } from 'bll/reducers/userReducer';
import { useSelector } from 'react-redux';
import { selectUserId } from 'bll/selectors/Selectors';
import {useAppDispatch} from "bll/store";

type FormikErrorType = {
  userId?:number
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  github?: string;
  vk?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
  youtube?: string;
  mainLink?: string;
};
export const UserData = () => {
  const userIdData = useSelector(selectUserId);
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      userId:userIdData,
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '', // ссылка на email
      youtube: '',
      mainLink: '', // ссылка на телеграм
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.fullName) {
        errors.fullName = 'Поле не может быть пустым';
      } else if (values.fullName.length < 3) {
        errors.fullName = 'Слишком короткое имя';
      }
      if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = 'Заполните поле';
      }
      if (!values.facebook) {
        errors.facebook = 'Поле не может быть пустым';
      }
      if (!values.github) {
        errors.github = 'Поле не может быть пустым';
      }
      if (!values.instagram) {
        errors.instagram = 'Поле не может быть пустым';
      }
      if (!values.website) {
        errors.website = 'Поле не может быть пустым';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.website)) {
        errors.website = 'Некорректный email';
      }
      if (!values.mainLink) {
        errors.mainLink = 'Поле не может быть пустым';
      }
      if (!values.youtube) {
        errors.youtube = 'Поле не может быть пустым';
      }
      if (!values.vk) {
        errors.vk = 'Поле не может быть пустым';
      }
      if(!values.twitter){
        errors.twitter = 'Поле не может быть пустым';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(UpdateUserData(values));
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <Input placeholder="Введите никнэйм" {...formik.getFieldProps('fullName')} />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className={s.error}>{formik.errors.fullName}</div>
          )}
        </div>
        <div>
          <Input placeholder="email" {...formik.getFieldProps('website')} />
          {formik.touched.website && formik.errors.website && (
            <div className={s.error}>{formik.errors.website}</div>
          )}
        </div>

        <div className={style.checkboxContainer}>
          <Checkbox
            checked={formik.values.lookingForAJob}
            {...formik.getFieldProps('lookingForAJob')}
          />
          <span> В поисках работы </span>
        </div>
        <div>
          <Input
            placeholder="Ожидание от работы"
            {...formik.getFieldProps('lookingForAJobDescription')}
          />
          {formik.touched.lookingForAJobDescription &&
            formik.errors.lookingForAJobDescription && (
              <div className={s.error}>{formik.errors.lookingForAJobDescription}</div>
            )}
        </div>
        <div>
          <Input placeholder="Ссылка на GitHub" {...formik.getFieldProps('github')} />
          {formik.touched.github && formik.errors.github && (
            <div className={s.error}>{formik.errors.github}</div>
          )}
        </div>
        <div>
          <Input placeholder="Ссылка на VK" {...formik.getFieldProps('vk')} />
          {formik.touched.vk && formik.errors.vk && (
            <div className={s.error}>{formik.errors.vk}</div>
          )}
        </div>
        <div>
          <Input placeholder="Ссылка на twitter" {...formik.getFieldProps('twitter')} />
          {formik.touched.twitter && formik.errors.twitter && (
              <div className={s.error}>{formik.errors.twitter}</div>
          )}
        </div>
        <div>
          <Input placeholder="facebook" {...formik.getFieldProps('facebook')} />
          {formik.touched.facebook && formik.errors.facebook && (
            <div className={s.error}> {formik.errors.facebook}</div>
          )}
        </div>
        <div>
          <Input placeholder="instagram" {...formik.getFieldProps('instagram')} />
          {formik.touched.instagram && formik.errors.instagram && (
            <div className={s.error}>{formik.errors.instagram}</div>
          )}
        </div>
        <div>
          <Input placeholder="youtube" {...formik.getFieldProps('youtube')} />
          {formik.touched.youtube && formik.errors.youtube && (
            <div className={s.error}>{formik.errors.youtube}</div>
          )}
        </div>

        <div>
          <Input placeholder="telegram" {...formik.getFieldProps('mainLink')} />
          {formik.touched.mainLink && formik.errors.mainLink && (
            <div className={s.error}>{formik.errors.mainLink}</div>
          )}
        </div>
      </div>
      <Button type='submit'>Изменить</Button>
    </form>
  );
};
