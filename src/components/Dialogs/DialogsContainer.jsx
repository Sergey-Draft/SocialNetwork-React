import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AddMessageBodyCreator, updateNewMessageCreator, UpdateNewUserIdCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

const DialogsContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/* let RedirectComponentContainer = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(RedirectComponentContainer) */

export default DialogsContainer;
