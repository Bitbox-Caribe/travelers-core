import classes from "./AnimatedInput.module.css";

const AnimatedInput = ({ type, id, label, value }) => {
  const emptyField = value == null;
  const inputWrapperClassName = `${classes.inputWrapper} ${!emptyField &&
    classes.hasValue}`;

  return (
    <div className={inputWrapperClassName}>
      <input id={id} type={type || "text"} className={classes.input} />
      <label htmlFor={id} className={classes.inputLabel}>
        {label}
      </label>
    </div>
  );
};

export default AnimatedInput;
