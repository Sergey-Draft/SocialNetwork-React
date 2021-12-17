import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import videoReducer from "./videoReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    newsPage: newsReducer,
    auth: authReducer,
    videoPage: videoReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;