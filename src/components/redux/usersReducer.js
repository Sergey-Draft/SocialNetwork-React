import { usersAPI } from "../../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 400,
    currentPage: 7,
    isFetching: null,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;

    }
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId });


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.data.items));
            })
    }
}


export const toggleFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(userId))
                };
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const toggleUnfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(userId))
                };
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


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