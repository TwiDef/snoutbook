import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "first post", likesCount: 15 },
        { id: 2, message: "second post", likesCount: 5 },
        { id: 3, message: "another post", likesCount: 23 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
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
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const updateNewTextPostActionsCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
/* Posts action creator */

/* ***************************************************************************** */

/* thunks */
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
/* thunks */

/* ***************************************************************************** */
export default profileReducer;