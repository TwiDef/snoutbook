const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "first post", likesCount: 15 },
                { id: 2, message: "second post", likesCount: 5 },
                { id: 3, message: "another post", likesCount: 23 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },

        sideBar: {
            users: [
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
            ],

        }
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            const body = {
                id: 5,
                message: this._state.dialogsPage.newMessageBody,
            }

            this._state.dialogsPage.messages.push(body)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

/* Posts */
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewTextPostActionsCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

/* Message */
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


window.store = store;
export default store;