import { Navigate } from "react-router-dom";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";


function Register(props) {
  return (!props.auth ? 
    <main>
      <AuthForm
        name={["name", "email", "password"]}
        text="Уже зарегистрированы?"
        button="Зарегистрироваться"
        title="Добро пожаловать!"
        authType="register"
        linkRout="/signin"
        link="Войти"
        onLogin={props.onLogin}
      />
    </main>
   : 
    <Navigate to="/movies" />
  );
}

export default Register;
