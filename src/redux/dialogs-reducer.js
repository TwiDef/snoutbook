const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }

        case SEND_MESSAGE: {
            const body = {
                id: 5,
                message: state.newMessageBody,
            }
            state.messages.push(body)
            state.newMessageBody = ''
            return state;
        }

        default: {
            return state;
        }
    }
}

/* Message action crator */
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


export default dialogsReducer;