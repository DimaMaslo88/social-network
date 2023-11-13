import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import style from 'styles/settings.module.scss'
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: boolean
    spanClassName?: string
}
export const Input = ({
                          type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
                          onChange, onChangeText,
                          onKeyPress, onEnter,
                          error,
                          className, spanClassName,

                          ...restProps// все остальные пропсы попадут в объект restProps
                      }: SuperInputTextPropsType) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // если есть пропс onChange
        if (onChange) {
            onChange(e); // то передать ему е (поскольку onChange не обязателен)
        }
        if (onChangeText) {
            onChangeText(e.currentTarget.value);
        }
    };

    return (
      <div className={style.inputBlock}>
        <input
           onChange={onChangeCallback}
            className={style.input}
            type="text"
            {...restProps}
        />
      </div>
    );
};

