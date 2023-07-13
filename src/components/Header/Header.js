import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import Navigation from '../Navigation/Navigation.js';

function Header({ theme }) {
    const { logeIn } = useContext(CurrentUserContext);
    const [ openBurger, setOpenBurger ] = useState(false);

    function handleToggleBurger() {
        setOpenBurger(!openBurger);
      }

      return (
        <header className="header">
          <Link to="/" className="header__logo"/>
          { !theme.default && ( logeIn
            ? <div>
                <div className={`header__overlay ${openBurger ? 'header__overlay_active' : ''}`}/>
                <button
                  className="header__burger"
                  onClick={handleToggleBurger}>
                  <div
                    className={`header__burger-menu ${openBurger ? 'header__burger-menu_active' : ''}`}/>
                </button>
                <Navigation
                  isOpenBurger={openBurger}/>
              </div>
            : <div className="header__login">
                <Link to="/signup" className="header__link">
                  Регистрация
                </Link>
                <Link to="/signin" className="header__button">
                  Войти
                </Link>
              </div>
            )
          }
    
        </header>
      )
    }
    export default Header;