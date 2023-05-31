import React from 'react';
import classes from './SidebarItem.module.css';


const SidebarItem = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src={props.avatar} alt="avatar" />
            <div className={classes.name}>{props.name}</div>
        </div>

    )
}

export default SidebarItem;