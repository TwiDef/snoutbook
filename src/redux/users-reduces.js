const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [/* 
        {
            id: 1,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/1234/1234844.png',
            followed: false,
            fullName: "Dmitriy",
            status: "some status",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: 2,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/1205/1205645.png',
            followed: false,
            fullName: "Andrey",
            status: "another status",
            location: {
                city: "Riga",
                country: "Latvia"
            }
        },
        {
            id: 3,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/1680/1680401.png',
            followed: true,
            fullName: "Alex",
            status: "like fishing",
            location: {
                city: "Bratislava",
                country: "Slovakia"
            }
        },
        {
            id: 4,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/3066/3066718.png',
            followed: true,
            fullName: "Sarah",
            status: "none",
            location: {
                city: "Paris",
                country: "France"
            }
        },
        {
            id: 5,
            photoUrl: 'https://cdn-icons-png.flaticon.com/512/3384/3384516.png',
            followed: true,
            fullName: "Galthran",
            status: "none",
            location: {
                city: "Necropolis",
                country: "HoM"
            }
        }
     */]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default: {
            return state;
        }
    }
}

/* Message action crator */
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})


export default usersReducer;