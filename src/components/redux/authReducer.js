import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}



const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData  = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data:{id, email, login, isAuth} });

export const userAuthorizationThunk = () => {
    return (dispatch) => {
        authAPI.authorization()
        .then(response => {
          if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
          }
        })
    }
} 

export const userLoginThunk = (email, password, rememberMe = false) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(userAuthorizationThunk())
          }
        })
    }
} 

export const userLogoutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
        .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(userAuthorizationThunk(null, null, null, false))
              window.location.reload()
          }
        })
    }
} 


export default authReducer;

