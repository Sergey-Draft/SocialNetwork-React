const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_USER_ID = 'UPDATE-NEW-USER-ID'


let initialState = {
    dialogs: [
        { id: 1, name: "Andrew", imgurl: 'https://w7.pngwing.com/pngs/985/915/png-transparent-superman-computer-icons-superhero-avatar-child-face-heroes.png' },
        { id: 2, name: "Sveta", imgurl: 'https://nchzd.ru/files/1244/1731/direktor.jpeg' },
        { id: 3, name: "Sasha", imgurl: 'https://im0-tub-by.yandex.net/i?id=53c063b1546b7597918e7ebd63ad8586&n=13' },
        { id: 4, name: "Vladimir", imgurl: 'https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg' },
        { id: 5, name: "Petya", imgurl: 'https://banner2.cleanpng.com/20190717/icr/kisspng-computer-icons-race-14-business-avatar-application-5d2f03c184ded7.4186435015633622415443.jpg' },
    ],
    newUserId: '1',
    messages: [
        { id: 1, message: "Hello, How are you today?" },
        { id: 2, message: "I am ok! And you?" },
        { id: 3, message: "So, what do you wanna do today?" },
        { id: 4, message: "Nah, I dunno. Play soccer.. or learn more coding perhaps.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { id: 5, message: "Yo!" },
    ],
    newMessage: 'Hello!'
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 6,
                message: state.newMessage
            }
            stateCopy.messages.push(newMessage)
            return stateCopy; 
        
        case UPDATE_NEW_MESSAGE_TEXT: 
            stateCopy.newMessage = action.newMessageText;
            return stateCopy;
        
        case UPDATE_NEW_USER_ID: 
            stateCopy.newUserId = action.newUserId;
            return stateCopy;

        default:
            return state;
    }
}

export const AddMessageBodyCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })
export const UpdateNewUserIdCreator = (newId) => ({ type: UPDATE_NEW_USER_ID, newUserId: newId })

export default dialogsReducer;