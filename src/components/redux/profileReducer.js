const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, post: "Hi", likesCount: "15" },
        { id: 2, post: "How is your doing", likesCount: "15" },
        { id: 3, post: "I am the first!", likesCount: "-15" },
        { id: 4, post: "Youre not", likesCount: "5" },
    ],
    newPostText: 'Введите сообщение',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, post: state.newPostText, likesCount: 0 }],
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }

}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const AddPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;