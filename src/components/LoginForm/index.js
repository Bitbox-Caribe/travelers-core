import { useForm } from "react-hook-form";

import { validateEmail } from "../../shared/validators";
// import Checkbox from "../../Checkbox";
import Input from "../Input";
import ThreeDotsLoader from "../Loaders/ThreeDots";
import classes from "./LoginForm.module.css";

const ErrorMessage = ({ children }) => (
  <div className="pb-8 relative">{children}</div>
);

const FallbackHelpRender = ({ href }) => (
  <div>
    <a
      className="mt-5 text-center text-sm cursor-pointer block"
      href={href || "https://helpdesk.ikeasi.com"}
      target="_blank"
      rel="noreferrer"
    >
      ¿No puedes acceder? Solicita ayuda{" "}
      <span className="font-bold underline">aqu&iacute;</span>
    </a>
  </div>
);

function LoginForm({ emailInputConfig, passwordInputConfig, formConfig }) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  // FORM
  const handleFormSubmit =
    formConfig && formConfig.onSubmit
      ? formConfig.onSubmit
      : () => {
          alert("sent!");
        };
  const sendButtonLabel =
    formConfig && formConfig.sendBtnLabel
      ? formConfig.sendBtnLabel
      : "Iniciar sesión";
  const HelpComponent =
    formConfig && formConfig.helpRender ? (
      (() => {
        const { helpRender: HelpRender } = formConfig;
        return <HelpRender />;
      })()
    ) : (
      <FallbackHelpRender href={helpHref} />
    );
  const isSubmitting = formConfig ? formConfig.isSubmitting : false;
  const helpHref = formConfig ? formConfig.helpHref : null;

  // EMAIL INPUT
  const emailInputId = emailInputConfig ? emailInputConfig.id : "email";
  const emailInputName = emailInputConfig ? emailInputConfig.name : "email";
  const emailInputPlaceholder = emailInputConfig
    ? emailInputConfig.placeholder
    : "Correo electrónico";

  // PASSWORD INPUT
  const passwordInputId = passwordInputConfig
    ? passwordInputConfig.id
    : "password";
  const passwordInputName = passwordInputConfig
    ? passwordInputConfig.name
    : "password";
  const passwordInputPlaceholder = passwordInputConfig
    ? passwordInputConfig.placeholder
    : "Contraseña";

  const submit = (formData) => {
    handleFormSubmit(formData);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit(submit)}>
      <Input
        layout="basic"
        id={emailInputId}
        name={emailInputName}
        placeholder={emailInputPlaceholder}
        inputClassName="bg-gray-400 border-transparent"
        register={register}
        registerOptions={{ required: true, validate: validateEmail }}
      />
      <ErrorMessage>
        {/* eslint-disable indent */}
        {errors.email && errors.email.type === "required" && (
          <span className={classes.errorMessage}>Este campo es requerido</span>
        )}
        {errors.email && errors.email.type === "validate" && (
          <span className={classes.errorMessage}>
            Correo electr&oacute;nico inv&aacute;lido
          </span>
        )}
        {/* eslint-enable indent */}
      </ErrorMessage>
      <Input
        layout="basic"
        id={passwordInputId}
        name={passwordInputName}
        type="password"
        placeholder={passwordInputPlaceholder}
        inputClassName="bg-gray-400 border-transparent"
        register={register}
        registerOptions={{ required: true }}
      />
      <ErrorMessage>
        {/* eslint-disable indent */}
        {errors.password && errors.password.type === "required" && (
          <span className={classes.errorMessage}>Este campo es requerido</span>
        )}
        {/* eslint-enable indent */}
      </ErrorMessage>
      {/* <Checkbox id="remember-account" label="Recordarme" classes="mt-2" /> */}
      <button
        type="submit"
        className={classes.sendButton}
        disabled={isSubmitting}
      >
        {!isSubmitting ? (
          <span className="font-bold text-white text-lg uppercase">
            {sendButtonLabel}
          </span>
        ) : (
          <ThreeDotsLoader />
        )}
      </button>
      {HelpComponent}
    </form>
  );
}

export default LoginForm;
