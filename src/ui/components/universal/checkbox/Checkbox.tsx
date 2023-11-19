import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from 'styles/checkbox.module.scss'
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};
export const Checkbox = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}: SuperCheckboxPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeChecked) {
      onChangeChecked(e.currentTarget.checked);
    }
    if(onChange){
      onChange(e)
    }
  };
  const finalInputClassName = `${style.checkbox} ${className || ''}`
  return (
    <div>
      <input type="checkbox" {...restProps} onChange={onChangeHandler} className={finalInputClassName} />
    </div>
  );
};
