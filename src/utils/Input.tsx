import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label className="label">
        {label}
        <div className="control">
          <input className="input" {...field} {...props} />
        </div>
      </label>
      {meta.touched && meta.error ? (
        <div className="help is-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
