import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from 'styles/button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    black?: boolean

}

export const Button: React.FC<SuperButtonPropsType> = ({black, className, ...restProps}) => {
    const finalStyle = `${style.btn} ${black ? style.black : ''} ${className}`

    return (
        <button

      className={finalStyle}
            {...restProps}
        />


    );
};

