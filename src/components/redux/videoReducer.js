
const SET_VIDEO_ID = 'SET_VIDEO_ID';


const initialState = {
    videoID: null
}


const videoReducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_VIDEO_ID:
        return {
            ...state,
            videoID: action.videoID
        }
        default:
            return state

    }
}

export const setVideoIDAC = (videoID) => ({ type: SET_VIDEO_ID, videoID })


export default videoReducer;