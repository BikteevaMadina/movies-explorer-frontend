import {useNavigate} from "react-router-dom";
import './ProfileNav.css';
// import ProfileIcon from '../../images/icon__COLOR_icon-main.svg';
import React from 'react';

function ProfileNav(props) {
    const navigate = useNavigate();
    return (
        <>
            <button className='profile__nav_btn' type='button' onClick={() => navigate("/profile")}>
                <p className='profile__nav_btn__text'>Аккаунт</p>
                {/* <img className="nav-profile-btn__img" alt="иконка профиля" src={ProfileIcon}/> */}
            </button>
            <button className='profile__nav_menu' type='button' onClick={props.isOpen}>
            </button>
        </>
    );
}

export default ProfileNav;