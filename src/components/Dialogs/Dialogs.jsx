import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to="/dialogs/1">Dmitriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Sarah</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Galtran</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>some text</div>
            </div>
        </div>
    )
}

export default Dialogs;