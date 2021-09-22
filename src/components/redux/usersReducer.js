const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 200,
    currentPage: 7,
    isFetching: true
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
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;

    }
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setcurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

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