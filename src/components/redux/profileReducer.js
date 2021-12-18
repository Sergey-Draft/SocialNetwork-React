import { reset } from "redux-form";
import { profileAPI, usersAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        { id: 1, post: "Hi", likesCount: "15" },
        { id: 2, post: "How is your doing", likesCount: "15" },
        { id: 3, post: "I am the first!", likesCount: "-15" },
        { id: 4, post: "Youre not", likesCount: "5" },
    ],
    profile: null,
    status: 'none'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: action.postId, post: action.text, likesCount: 0 }],
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }

}



export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const AddPostActionCreator = (text, postId) => ({ type: ADD_POST, text, postId });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });



export const addPostThunk = (text, postId) => {
    return (dispatch) => {
        dispatch(AddPostActionCreator(text, postId))
        dispatch(reset('post'))
    }
}

export const getuserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }

            })
    }
}


export default profileReducer;