import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css';

const Dialogs = (props) => {


    const dialogsElements = props.dialogs
        .map((dialog, index) => <DialogItem key={index} id={dialog.id} name={dialog.name} />)

    const messagesElements = props.messages
        .map((message, index) => <Message key={index} id={message.id} message={message.message} />)

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