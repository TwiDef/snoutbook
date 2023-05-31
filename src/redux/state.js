/* ######## DATA ######## */
const state = {

    profilePage: {
        posts: [
            { id: 1, message: "first post", likesCount: 15 },
            { id: 2, message: "second post", likesCount: 5 },
            { id: 3, message: "another post", likesCount: 23 },
        ]
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
        ]
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
}
/* ######## DATA ######## */

export default state;