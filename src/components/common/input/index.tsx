import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

type IputProps = {
  id: string;
  name?: string;
  className?: string;
  style?: object;
  title?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  formRegister?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  id,
  // name,
  title,
  // value,
  placeholder,
  disabled,
  // onChange,
  formRegister,
  ...rest
}: IputProps) => {
  return (
    <>
      {title && (
        <label htmlFor={id} className="mb-2 fs-4 fw-bold">
          {title}
        </label>
      )}
      <input
        id={id}
        type="text"
        className={`form-control ${className}`}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        disabled={disabled}
        placeholder={placeholder}
        {...formRegister}
        {...rest}
      />
    </>
  );
};

export default Input;
