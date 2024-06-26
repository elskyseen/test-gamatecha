import React from "react";

type IInput = {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: any) => any;
  isError?: boolean;
  errorMessage?: string;
};

const Input: React.FC<IInput> = ({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  isError,
  errorMessage,
}) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label
        htmlFor={name}
        className="textx-base capitalize font-bold text-secondary mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-3 px-4 mb-1 rounded-md border-2 border-secondary text-secondary text-base font-bold placeholder:text-secondary/70 placeholder:capitalize"
      />
      {isError && (
        <p className="text-base text-warning font-bold">*{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
