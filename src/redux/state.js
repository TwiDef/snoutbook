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
            newMessageText: ''
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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    addPost() {
        debugger
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        const newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;