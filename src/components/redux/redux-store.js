import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import musicReducer from "./musicReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer
})

let store = createStore(reducers);

window.store = store;

export default store;