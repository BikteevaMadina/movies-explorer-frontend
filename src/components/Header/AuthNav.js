
import React from "react";
import "./AuthNav.css";

function AuthNav() {
    return (
        <div className="header__auth">
            <a href="/signup" className="header__auth_signup-button">Регистрация</a>
            <a href="/signin" className="header__auth_signin-button">Войти</a>
        </div>
    );
}

export default AuthNav;