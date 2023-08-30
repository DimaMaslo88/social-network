import React from 'react';
import {useFormik} from "formik";
import style from 'styles/login.module.scss'
import {LoginFormTYpe} from "types/types";

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors: LoginFormTYpe = {}
            if (!values.email) {
                errors.email = 'Введите email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Не корректный email'
            }
            if (!values.password) {
                errors.password = 'Введите пароль'
            } else if (values.password.length < 5) {
                errors.password = 'Пароль слишком короткий'
            }
            return errors
        },
        onSubmit: (values) => {
            formik.resetForm()
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} >
            <div >
                <input
                    placeholder='email'
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className={style.error}>
                        {formik.errors.email}
                    </div>
                )
                }
            </div>
            <div>
                <input
                    placeholder='пароль'

                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className={style.error}>
                        {formik.errors.password}
                    </div>
                )}

            </div>
            <div>
                <button
                    type='submit'
                    disabled={!formik.isValid}
                >Подтвердить
                </button>
            </div>


        </form>
    );
};

