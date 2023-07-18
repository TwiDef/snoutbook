import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img
                width={60}
                height={60}
                className={classes.headerImg}
                src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg"
                alt="img" />
            <div className={classes.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;