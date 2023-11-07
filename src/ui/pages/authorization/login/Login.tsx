import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import style from 'styles/login.module.scss'
import {LoginFormTYpe} from "types/types";
import {useAppDispatch} from "bll/store";
import {LoginUser} from "bll/reducers/authReducer";
import {useSelector} from "react-redux";
import {selectCaptcha, selectIsAuthUser} from "bll/selectors/Selectors";
import {useNavigate} from "react-router-dom";
import {Button} from "ui/components/universal/button/Button";
import {EyeVisible} from "images/password icons/eye_visible";
import {EyeNotVisible} from "images/password icons/eye-off-svgrepo-com";


export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectIsAuthUser)
    const navigate = useNavigate()
    const [active, setActive] = useState<boolean>(false)
    const captcha = useSelector(selectCaptcha)
    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth])
    const onClickHandler = () => {
        setActive(!active)
    }
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
            dispatch(LoginUser(values))
            formik.resetForm()
        }
    })


    return (
        <form onSubmit={formik.handleSubmit} className={style.login}>
            <div className={style.inputContainer}>
                <div>
                    <input
                        className={style.input}
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
                {!active ? <div className={style.inputPasswordContainer}>
                    <input
                        type='password'
                        className={style.inputPassword}
                        placeholder='пароль'

                        {...formik.getFieldProps('password')}

                    />
                    <span className={style.spanToggle}>
                        <EyeVisible
                            width='30px'
                            className={style.toggleIcon}
                            onClick={onClickHandler}
                        />
                    </span>
                </div> : <div className={style.inputPasswordContainer}>
                    <input
                        type='text'
                        className={style.inputPassword}
                        placeholder='пароль'

                        {...formik.getFieldProps('password')}

                    />
                    <span className={style.spanToggle}>
                        <EyeNotVisible
                            width='25px'
                            height='30px'
                            className={style.toggleIcon}
                            onClick={onClickHandler}
                        />
                    </span>
                </div>
                }

                {formik.touched.password && formik.errors.password && (
                    <div className={style.error}>
                        {formik.errors.password}
                    </div>
                )}
            </div>
            {captcha && <img src={captcha} alt='Введите символы на картинке'/>}
            <div>
                <Button
                    type='submit'
                    disabled={!formik.isValid}

                >Подтвердить
                </Button>
            </div>


        </form>
    );
};

