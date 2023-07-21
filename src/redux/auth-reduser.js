import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: {
            return state
        }
    }
}
/* action creators */
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: { userId, email, login }
})
/* action creators */

/* ***************************************************************************** */

/* thunks */
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            const { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login))
        })
    }
}
/* thunks */

/* ***************************************************************************** */

export default authReducer;