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
        <div id={props.id} className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogs = [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Sarah" },
        { id: 5, name: "Galthran" },
    ]

    const messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Lorem" },
        { id: 3, message: "How are you" },
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
    const messagesElements = messages.map(message => <Message id={message.id} message={message.message} />)

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;