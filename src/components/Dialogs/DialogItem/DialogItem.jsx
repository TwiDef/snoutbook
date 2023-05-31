import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img className={classes.avatar} src={props.avatar} alt="avatar" />
            <NavLink
                className={({ isActive }) => isActive ? classes.activeLink : ''}
                to={path}>{props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;