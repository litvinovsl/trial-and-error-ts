import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <a className='footer__link' href='https://github.com/litvinovsl' rel="noreferrer" target="_blank">GitHub</a>
            <p className='footer__copyright'>© {year}. Litvinov Sergey.</p>
        </div>
    );
}

export default Footer;