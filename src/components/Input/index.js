import AnimatedInput from "./Animated";
import BasicInput from "./Basic";

const Input = (props) => {
  const {
    id,
    type,
    name,
    value,
    containerClassName,
    placeholder,
    inputClassName,
    label,
    labelClassName,
    layout,
    onChange,
    onFocus,
    onBlur,
    register,
    registerOptions,
    autoComplete,
  } = props;

  switch (layout) {
    case "basic":
      return (
        <BasicInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          inputClassName={inputClassName}
          label={label}
          labelClassName={labelClassName}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          containerClassName={containerClassName}
          value={value}
          register={register}
          registerOptions={registerOptions}
          autoComplete={autoComplete}
        />
      );

    case "animated":
      return <AnimatedInput id={id} type={type} label={label} />;

    default:
      return null;
  }
};

export default Input;
