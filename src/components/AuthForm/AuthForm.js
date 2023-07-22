import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm({
  title,
  children,
  buttonText,
  onSubmit,
  route,
  linkToSignin,
  textToRegistr,
  isValid,
}) {
  return (
    <main className="auth">
      <section className="auth__container">
        <Link to="/" className="auth__container_logo-link">
          <img
            className="auth__container_logo"
            src={logo}
            alt="Логотип сайта"
          />
        </Link>
        <h2 className="auth__container_header">{title}</h2>
        <form
          className="auth__container_form"
          method="get"
          onSubmit={onSubmit}
          noValidate
        >
          <fieldset className="auth__container_fieldset">{children}</fieldset>
          <div className="auth__container_link-buttons">
            <button
              className={`auth__container_submit ${
                !isValid && "auth__container_submit-disabled"
              }`}
              type="submit"
              aria-label={buttonText}
              disabled={!isValid && true}
            >
              {buttonText}
            </button>
            <p className="auth__container_text">
              {textToRegistr}
              <Link className="auth__container_link" to={route}>
                {linkToSignin}
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
export default AuthForm;
