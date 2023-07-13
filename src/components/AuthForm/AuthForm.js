import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({ setting }) {
  return (
    <section className="auth">
      <Link to="/" className="header__link">
        <img src={logo} alt="Логотип проекта" className="auth__logo" />
      </Link>
      <h2 className="auth__title">{setting.title}</h2>
      <form className="auth__form">
        {setting.type === "register" && (
          <div className="auth__input-row">
            <label className="auth__input-label">Имя</label>
            <input
              val="true"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              className="auth__input"
              required
            />
            <span className="auth__line"></span>
          </div>
        )}
        <div className="auth__input-row">
          <label className="auth__input-label">E-mail</label>
          <input
            className="auth__input"
            id="email"
            type="email"
            placeholder="Введите почту"
            required
          />
          <span className="auth__line"></span>
        </div>

        <div className="auth__input-row">
          <label className="auth__input-label">Пароль</label>
          <input
            placeholder="Введите пароль"
            type="password"
            className="auth__input"
            required
            val="true"
          />
          <span className="auth__line"></span>
        </div>
      </form>

      <div className="auth__div">
        <button type="submit" className="auth__submit-btn">
          {setting.btnSubmitText}
        </button>
        <div className="auth__transition">
          <p className="auth__transition-text">{setting.transitionText}</p>
          <Link to={setting.transitionPath} className="auth__transition-link">
            {setting.transitionLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
