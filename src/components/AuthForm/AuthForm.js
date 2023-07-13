import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function AuthForm({ setting }) {
  return (
    <section className="auth">
      <img src={logo} alt="Логотип" className="auth__logo" />
      <h2 className="auth__title">{setting.title}</h2>
      <form className="auth__form">
        {setting.type === "register" && (
          <div className="auth__input-row">
            <label className="auth__input-label">Имя</label>
            <input type="text" className="auth__input" required />
            <span className="auth__line"></span>
          </div>
        )}

        <div className="auth__input-row">
          <label className="auth__input-label">E-mail</label>
          <input type="email" className="auth__input" required />
          <span className="auth__line"></span>
        </div>

        <div className="auth__input-row">
          <label className="auth__input-label">Пароль</label>
          <input type="password" className="auth__input" required />
          <span className="auth__line"></span>
        </div>
      </form>

      <div className="auth__div">
        <button type="submit" className="auth__submit-btn">
          {setting.btnSubmitText}
        </button>
        <div className="auth__transition">
          <p className="auth__transition-text">{setting.transitionText}</p>
          <Link
            to={setting.transitionPath}
            className="auth__transition-link"
          >
            {setting.transitionLinkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
