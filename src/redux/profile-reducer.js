const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "first post", likesCount: 15 },
        { id: 2, message: "second post", likesCount: 5 },
        { id: 3, message: "another post", likesCount: 23 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }

        default: {
            return state;
        }
    }
}

/* Posts action creator */
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewTextPostActionsCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;