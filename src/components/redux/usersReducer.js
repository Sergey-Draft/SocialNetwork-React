const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({ ...u, followed: !u.followed })
                    }
                    return u;
                })
            }
            case SET_USERS:
                return {...state, users: [...state.users, ...action.users ]}
        default:
            return state;

    }
}

    export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
    export const setUsersAC = (users) => ({type: SET_USERS, users})

    export default usersReducer;



/* switch (action.type) {
    case FOLLOW: {
        let stateCopy = { ...state,
            users: [...state.users]
        }
        for (let i = 0; i <= stateCopy.users.length; i++) {
            if (stateCopy.users[i].id === action.userId) {
                stateCopy.users[i].followed = false;
                return  stateCopy;
            }
        }
        return state;
    }
    case UNFOLLOW: {
        let stateCopy = { ...state,
            users: [...state.users]
        }
        for (let i = 0; i <= stateCopy.users.length; i++) {
            if (stateCopy.users[i].id === action.userId) {
                stateCopy.users[i].followed = true;
                return  stateCopy;
            }
        }
        return state;
    }

    default:
        return state;

} */


/* switch (action.type) {
    case FOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return ({ ...u, followed: false })
                }
                return u;
            })
        }
    case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return ({ ...u, followed: true })
                }
                return u;
            })
        }
    default:
        return state;

} */