const SET_GENRE = 'SET_GENRE';

let initialState = {
    genre: []
}



const musicReducer = (state = initialState, action) => {


    switch (action.type) {
            case SET_GENRE:
                return {...state,
                    genre: [...state.genre, ...action.genre ]}
        default:
            return state;

    }
}

    export const setMusicAC = (genre) => ({type: SET_GENRE, genre})

    export default musicReducer;

