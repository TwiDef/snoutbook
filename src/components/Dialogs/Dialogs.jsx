import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    const dialogsElements = state.dialogs
        .map((dialog, index) => <DialogItem
            key={index}
            id={dialog.id}
            name={dialog.name}
            avatar={dialog.avatar} />)

    const messagesElements = state.messages
        .map((message, index) => <Message
            key={index}
            id={message.id}
            message={message.message} />)

    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>

                <div>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        value={newMessageBody} />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>add message</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;