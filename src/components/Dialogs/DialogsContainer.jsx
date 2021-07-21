import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { AddMessageBodyCreator, updateNewMessageCreator, UpdateNewUserIdCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


/* const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                    let writeMessage = () => {
                        store.dispatch(AddMessageBodyCreator());
                    }
                
                    let NewMessageChange = (text) => {
                        store.dispatch(updateNewMessageCreator(text));
                    }
                
                    const NewUserIdUpdate = (newId) => {
                        store.dispatch(UpdateNewUserIdCreator(newId))
                    }
                return <Dialogs addMessage={writeMessage} updateNewMessage={NewMessageChange} dialogsPage={store.getState().dialogsPage} NewUserIdUpdate={NewUserIdUpdate} />
            }

            }

        </StoreContext.Consumer>
    )
} */


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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