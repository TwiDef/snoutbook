import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css';

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