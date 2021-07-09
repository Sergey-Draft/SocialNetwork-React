const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_USER_ID = 'UPDATE-NEW-USER-ID'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessage
            }
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessageText;
            return state;
        case UPDATE_NEW_USER_ID:
            state.newUserId = action.newUserId;
            return state;
        default:
            return state;
    }


}

export const AddMessageBodyCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })
export const UpdateNewUserIdCreator = (newId) =>({ type: UPDATE_NEW_USER_ID, newUserId: newId })

export default dialogsReducer;