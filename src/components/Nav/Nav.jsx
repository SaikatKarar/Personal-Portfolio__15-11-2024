import React, { useRef } from 'react';
import navCSS from './../Nav/Nav.module.css';

const Nav = () => {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    return (
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">Helios</a>
            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#work">Works</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <button>Hire Me <i className="ri-arrow-right-up-line"></i></button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    );
};

export default Nav;
