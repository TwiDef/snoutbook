import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                width={40}
                height={40}
                className={classes.headerImg}
                src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg"
                alt="img" />
        </header>
    )
}

export default Header;