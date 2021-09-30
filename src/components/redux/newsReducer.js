const SET_DATA = 'SET_DATA'


let initialState = {
    dataNews: null
}



const newsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                dataNews: action.dataNews
            }

        default:
            return state;

    }
}


export const setDataAC = (dataNews) => ({ type: SET_DATA, dataNews });


export default newsReducer;