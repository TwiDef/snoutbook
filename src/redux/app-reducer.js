import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }

        default: {
            return state
        }
    }
}
/* action creators */
export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
})
/* action creators */


export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}

export default appReducer;