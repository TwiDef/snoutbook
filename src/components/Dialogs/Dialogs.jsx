import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name="Dmitriy" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Alex" id="3" />
                <DialogItem name="Sarah" id="4" />
                <DialogItem name="Galthran" id="5" />

            </div>

            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Lorem" />
                <Message message="How are you" />
            </div>
        </div>
    )
}

export default Dialogs;