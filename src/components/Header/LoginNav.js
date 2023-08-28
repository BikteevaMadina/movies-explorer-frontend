import "./LoginNav.css";
import { NavLink } from "react-router-dom";
import React from "react";

function LoginNav() {
  return (
    <nav className="header__navigate">
      <ul className="header__navigate_container">
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "header__navigate_link header__navigate_link_active"
                : "header__navigate_link"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "header__navigate_link header__navigate_link_active"
                : "header__navigate_link"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNav;
