let initialState = {
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

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;