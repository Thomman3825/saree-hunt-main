import React from 'react';
import style from './style.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>&copy; {new Date().getFullYear()} Saree Store. All rights reserved.</p>
        </footer>
    );
};

export default Footer;