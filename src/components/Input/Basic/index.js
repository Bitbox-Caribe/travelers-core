import classNames from "classnames";

import classes from "./BasicInput.module.css";

const BasicInput = ({
  id,
  type,
  value,
  placeholder,
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  name,
  required,
  disabled,
  onChange,
  onFocus,
  onBlur,
  register,
  registerOptions,
  autoComplete,
}) => {
  const inputClass = classNames(classes.input, inputClassName);
  const labelClass = classNames(classes.label, labelClassName);

  const changeHandler = (e) => {
    const name = e.target.name;
    const id = e.target.id;
    const value = e.target.value;
    onChange(value, name, id);
  };

  // prevent form submission when 'enter' is pressed
  const cancelDefaultBehavior = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <div className={containerClassName || ""}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      {!register ? (
        <input
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder || ""}
          className={inputClass}
          onChange={changeHandler}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete || "on"}
          onKeyDown={cancelDefaultBehavior}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder || ""}
          className={inputClass}
          onChange={changeHandler}
          // value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          {...register(name, registerOptions)}
        />
      )}
    </div>
  );
};

export default BasicInput;
