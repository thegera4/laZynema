import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">LaZynema</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Movies</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">TV Series</Link>
                        <Link to="/">Favorites</Link>
                    </div>
                    <div className="footer__content__menu">
                        <a href="https://portfolio-two-rose.vercel.app/" target="_blank" rel="noreferrer">About me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
