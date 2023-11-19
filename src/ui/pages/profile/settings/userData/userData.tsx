import React from 'react';
import { useFormik } from 'formik';
import { Input } from 'ui/components/universal/input/Input';
import { Button } from 'ui/components/universal/button/Button';
import s from 'styles/login.module.scss';
import { Checkbox } from 'ui/components/universal/checkbox/Checkbox';
import style from 'styles/checkbox.module.scss'

type FormikErrorType = {
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: {
    github?: string;
    vk?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
    youtube?: string;
    mainLink?: string;
  };
};
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
    validate: values => {
      const errors: FormikErrorType = {};
      if (!values.fullName) {
        errors.fullName = 'Поле не может быть пустым';
      } else if (values.fullName.length < 3) {
        errors.fullName = 'Слишком короткое имя';
      }
      if(!values.lookingForAJobDescription){
        errors.lookingForAJobDescription = 'Поле не может быть пустым'
      }

      return errors;
    },
    onSubmit: values => {
      console.log(values);
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
        <Input placeholder="website" />
        <div className={style.checkboxContainer}>
        <Checkbox /> <span> В поисках работы </span>
        </div>
        <div>
        <Input placeholder="Ожидание от работы"  {...formik.getFieldProps('lookingForAJobDescription')}/>
          {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription && (
              <div className={s.error}>
                {formik.errors.lookingForAJobDescription}
          </div>) }
        </div>
        <Input placeholder="Ссылка на GitHub" />
        <Input placeholder="Ссылка на VK" />
        <Input placeholder="facebook" />
        <Input placeholder="twitter" />
        <Input placeholder="youtube" />
        <Input placeholder="telegram" />
      </div>
      <Button>Изменить</Button>
    </form>
  );
};
