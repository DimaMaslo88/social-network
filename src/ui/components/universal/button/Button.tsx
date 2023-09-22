import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from 'styles/button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean

}

export const Button: React.FC<SuperButtonPropsType> = ({red, className, ...restProps}) => {
    return (
        <button

      className={style.btn}
            {...restProps}
        />


    );
};

