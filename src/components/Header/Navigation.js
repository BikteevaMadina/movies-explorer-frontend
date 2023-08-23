import React from "react";
import { Link, NavLink } from "react-router-dom";
import close from "../../images/Group.svg";
import "./ProfileNav.css";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div
      className={
        props.isOpen ? `navigation navigation__open` : `navigation`
      }
    >
      <div className="navigation__content">
        <button
          className="navigation__close"
          type="button"
          onClick={props.onClick}
        >
          <img className="navigation__close_img" src={close} alt="закрыть" />
        </button>
        <nav>
          <ul className="navigation__links">
            <li className="navigation__links_container">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__links_container">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__links_container">
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive
                    ? "navigation__link navigation__link_active"
                    : "navigation__link"
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="navigation__link-container">
              <Link
                className="profile__nav_btn profile__nav_btn-link profile__nav_btn__display_open"
                to="/profile"
              >
                {" "}
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
