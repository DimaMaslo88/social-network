import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType &{
red?:boolean
}

export const Button:React.FC<SuperButtonPropsType>= ({red,className,...restProps}) => {
    return (
        <button
            {...restProps}
        />


    );
};

