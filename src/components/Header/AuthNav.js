import "./AuthNav.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const AuthNav = () => {
  return (
    <nav className={"auth-nav"}>
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </Link>
      <ul className={"auth-nav__list"}>
        <li className={"auth-nav__item"}>
          <Link to={"/signup"} className={"auth-nav__link"}>
            Регистрация
          </Link>
        </li>
        <li className={"auth-nav__item_type_login"}>
          <Link
            to={"/signin"}
            className={"auth-nav__link auth-nav__link_type_login"}
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
