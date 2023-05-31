import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Navbar = (props) => {

    return (
        <div>

            <nav className={classes.nav}>

                <div className={classes.item}>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? classes.activeLink : ''}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink
                        to="/dialogs"
                        className={({ isActive }) => isActive ? classes.activeLink : ''}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink
                        to="/news"
                        className={({ isActive }) => isActive ? classes.activeLink : ''}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink
                        to="/music"
                        className={({ isActive }) => isActive ? classes.activeLink : ''}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => isActive ? classes.activeLink : ''}>Settings</NavLink>
                </div>
            </nav>

            <Sidebar state={props.state} />
        </div>

    )
}

export default Navbar;