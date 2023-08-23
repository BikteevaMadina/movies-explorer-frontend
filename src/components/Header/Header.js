import ProfileNav from "./ProfileNav";
import AuthNav from "./AuthNav";
import Navigation from './Navigation';
import LoginNav from "./LoginNav";
import Logo from "../Logo/Logo";
import React from 'react';
import './Header.css'

const Header = ({auth}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleClickOpen() {
        setIsOpen(true)
    }

    function handleClickClose() {
        setIsOpen(false)
    }

    return (
        <header className={auth ? "header": "header__active"}>
            <div className='header__logo-container'>
                <Logo/>
                {auth && <LoginNav onClick={handleClickOpen} />}
            </div>
            {auth ? <ProfileNav isOpen={handleClickOpen}/> : <AuthNav/>}
            <Navigation isOpen={isOpen} onClick={handleClickClose}/>
        </header>
    );
}

export default Header;