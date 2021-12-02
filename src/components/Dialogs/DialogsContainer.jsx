import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { AddMessageBodyCreator, updateNewMessageCreator, UpdateNewUserIdCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(AddMessageBodyCreator())
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageCreator(text))
        },
        NewUserIdUpdate: (newId) => {
            dispatch(UpdateNewUserIdCreator(newId))
        }

    }
}




const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
