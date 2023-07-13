import { Link } from "react-router-dom";

function Navigation({ isOpenBurger }) {
  return (
    <div className={`navigate ${isOpenBurger ? "navigation_active" : ""}`}>
      <Link to="/" className="navigation__link navigation__link_home">
        Главная
      </Link>
      <ul className="navigate__list">
        <li>
          <Link to="/movies" className="navigate__link">
            Фильмы
          </Link>
        </li>
        <li>
          <Link to="/saved-movies" className="navigate__link">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="navigate__profile">
        Аккаунт
      </Link>
    </div>
  );
}

export default Navigation;
