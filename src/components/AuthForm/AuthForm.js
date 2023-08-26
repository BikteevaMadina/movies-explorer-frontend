import useValid from "../Valid/useValid";
import Logo from "../Logo/Logo";
import React from "react";

function AuthForm(props) {
  const { values, 
          errors, 
          handleChange, 
          handleSubmit } = useValid(
    props.onLogin
  );

  return (
    <section className="auth">
      <div className="auth__header">
        <div className="auth__header-item">
          <div className="auth__logo">
            <Logo />
          </div>
          <h1 className="auth__text">{props.title}</h1>
        </div>
      </div>
      <form name={props.authType} 
            onSubmit={handleSubmit} 
            className="form">
        <ul className="auth__container">
          {props.authType === "register" && (
            <li className="auth__item-form">
              <p className="auth__name">Имя</p>
              <input
                className="auth__input"
                value={values.name || ""}
                onChange={handleChange}
                placeholder="Имя"
                maxLength="30"
                minLength="2"
                name="name"
                type="text"
                id="name"
                required
              />
            </li>
          )}
          {props.authType === "register" && (
            <p className="auth__valid-text">
              {errors.name && "Имя должно содержать не менее двух букв"}
            </p>
          )}
          <li className="auth__item-form">
            <p className="auth__name">E-mail</p>
            <input
              pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
              className="auth__input"
              value={values.email || ""}
              onChange={handleChange}
              placeholder="E-mail"
              maxLength="30"
              minLength="2"
              type="email"
              name="email"
              id="email"
              required
            />
          </li>
          <p className="auth__valid-text">
            {errors.email && "Пример email: pochta@yandex.ru"}
          </p>
          <li className="auth__item-form">
            <p className="auth__name">Пароль</p>
            <input
              pattern="^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$"
              className="auth__input"
              value={values.password || ""}
              onChange={handleChange}
              placeholder="Пароль"
              type="password"
              id="password"
              name="password"
              maxLength="30"
              minLength="2"
              required
            />
          </li>
          <p className="auth__valid-text">
            {errors.password &&
              "Пароль должен содержать минимум 8 символов. Одну букву нижнего регистра, одну верхнего, одну цифру и один спецсимвол"}
          </p>
        </ul>
        <div className="auth__item">
          <button
            className={`${
              props.authType === "register"
                ? "auth__item-button"
                : "auth__item-button auth__item-button-login"
            }
                              ${
                                props.authType === "register"
                                  ? (errors.name ||
                                      errors.email ||
                                      errors.password ||
                                      values.name === undefined ||
                                      values.email === undefined ||
                                      values.password === undefined) &&
                                    "auth__item-button_disable"
                                  : (errors.email ||
                                      errors.password ||
                                      values.email === undefined ||
                                      values.password === undefined) &&
                                    "auth__item-button_disable"
                              }`}
            type="submit"
          >
            {props.button}
          </button>
          <div className="auth__item-container">
            <p className="auth__item-text">{props.text}</p>
            <a className="auth__item-link" href={props.linkRout}>
              {props.link}
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
