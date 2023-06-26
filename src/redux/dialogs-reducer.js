const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dmitriy",
            avatar: "https://cdn-icons-png.flaticon.com/512/1234/1234844.png"
        },
        {
            id: 2,
            name: "Andrey",
            avatar: "https://cdn-icons-png.flaticon.com/512/1205/1205645.png"
        },
        {
            id: 3,
            name: "Alex",
            avatar: "https://cdn-icons-png.flaticon.com/512/1680/1680401.png"
        },
        {
            id: 4,
            name: "Sarah",
            avatar: "https://cdn-icons-png.flaticon.com/512/3384/3384516.png"
        },
        {
            id: 5,
            name: "Galthran",
            avatar: "https://cdn-icons-png.flaticon.com/512/3066/3066718.png"
        },
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Lorem" },
        { id: 3, message: "How are you" },
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

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