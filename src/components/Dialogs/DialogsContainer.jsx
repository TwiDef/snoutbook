import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {
            (store) => {

                //let state = store.getState().dialogsPage;

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                const onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage} />
            }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer;