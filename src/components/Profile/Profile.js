import React, {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import useValid from "../Valid/useValid";

function Profile(props) {
    const {values, errors, handleChange, handleSubmit} = useValid(props.updateUser);
    const currentUser = useContext(CurrentUserContext);

    const [currentUserEdit, setCurrentUserEdit] = useState(false);
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        setName(currentUser.name);

        setEmail(currentUser.email);
    }, [currentUser]);

    useEffect(() => {
        if 
        ((values.name !== undefined || values.email !== undefined)) 
        setCurrentUserEdit(true);

        else 
        setCurrentUserEdit(false);
    }, [currentUser, name, email, values.name, values.email]);

    return (
        <main>
            <section className="profile">
                <h1 className="profile__title" >Привет, {currentUser.name}!</h1>
                <form className="profile__form form"
                    name="user-data"
                    onSubmit={handleSubmit}>
                    <label className="profile__label" htmlFor="name">
                        <span className="profile__subtitle">Имя</span>
                        <input
                            defaultValue={values.name || name}
                            className="profile__input"
                            onChange={handleChange}
                            placeholder="Имя"
                            maxLength="30"
                            minLength="2"
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                    <label className="profile__label" htmlFor="email">
                        <span className="profile__subtitle profile__subtitle_border">E-mail</span>
                        <input
                            className="profile__input profile__input_border"
                            onChange={handleChange}
                            defaultValue={values.email || email}
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            required
                        />
                    </label>
                    <button
                        className={`profile__btn profile__btn_item_edit  ${
                            (errors.email
                                || errors.name
                                || values.email === email
                                || values.name === name
                                || !currentUserEdit)
                            && "profile__button_disable"
                        }`}
                        type="submit"
                        disabled={(errors.email
                            || errors.name
                            || values.email === email
                            || values.name === name
                            || !currentUserEdit)}>
                        Редактировать
                    </button>
                </form>
                <button
                    className="profile__btn profile__btn_item_exit"
                    onClick={props.onLogin}
                    type="button"
                >
                    Выйти из аккаунта
                </button>
            </section>
        </main>
    );
}

export default Profile;