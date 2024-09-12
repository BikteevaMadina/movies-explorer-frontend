import "./AuthNav.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const AuthNav = () => {
  return (
    <header className={"auth__nav"}>
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
      </Link>
      <ul className={"auth__nav_list"}>
        <li className={"auth__nav_item"}>
          <Link to={"/signup"} className={"auth__nav_link"}>
            Регистрация
          </Link>
        </li>
        <li className={"auth__nav_item-login"}>
          <Link
            to={"/signin"}
            className={"auth__nav_link auth__nav_link-login"}
          >
            Войти
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AuthNav;
