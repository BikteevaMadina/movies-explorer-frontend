import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormAndValidation } from "../Valid/useValid";

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    const { name, email, password } = values;
    evt.preventDefault();

    if (isValid) {
      onLogin({ name, email, password });
      resetForm();
    }
  }

  return (
    <AuthForm
      title={"Рады видеть!"}
      buttonText={"Войти"}
      onSubmit={handleSubmit}
      route={"/signup"}
      linkToSignin={"Регистрация"}
      textToRegistr={"Ещё не зарегистрированы?"}
      className="content"
      isValid={isValid}
    >
      <>
        <label className="form__item">
          <p className="form__item_text">{"E-mail"}</p>
          <input
            className={
              errors.email
                ? " form__input form__input_type-invalid"
                : "form__input"
            }
            type="email"
            name="email"
            pattern="[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}"
            placeholder="pochta@yandex.ru"
            required
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="form__input-error">{errors.email || ""}</span>
        </label>

        <label className="form__item">
          <p className="form__item_text">{"Пароль"}</p>
          <input
            className={
              errors.password
                ? " form__input form__input_type-invalid"
                : "form__input"
            }
            type="password"
            name="password"
            value={values.password || ""}
            minLength="3"
            maxLength="30"
            pattern="[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}"
            required
            onChange={handleChange}
          />
          <span className="form__input-error">{errors.password || ""}</span>
        </label>
      </>
    </AuthForm>
  );
}
export default Login;
