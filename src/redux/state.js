import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;