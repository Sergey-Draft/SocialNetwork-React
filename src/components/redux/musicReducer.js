const SET_GENRE = 'SET_GENRE';
const RADIO_LINK = 'RADIO_LINK';
const TRACK_LIST_URL = 'TRACK_LIST_URL';
const SET_TRACK_LIST = 'SET_TRACK_LIST';

let initialState = {
    genre: [],
    tracklist: [],
    currentRadioLink: '',
    tracklistURL: 'https://api.deezer.com/radio/37151/tracks',

}



const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRE:
            return {
                ...state,
                genre: [...action.genre]
            }

        case RADIO_LINK:
            return {
                ...state,
                currentRadioLink: action.link
            }

        case TRACK_LIST_URL:
            return {
                ...state,
                tracklistURL: action.tracklistURL
            }
        case SET_TRACK_LIST:
            return {
                ...state,
                tracklist: [...action.tracklist]
            }
        default:
            return state;

    }
}

export const setMusicAC = (genre) => ({ type: SET_GENRE, genre })
export const setCurrentRadioLinkAC = (link) => ({ type: RADIO_LINK, link })
export const trackListURLAC = (tracklistURL) => ({ type: TRACK_LIST_URL, tracklistURL })
export const trackListAC = (tracklist) => ({ type: SET_TRACK_LIST, tracklist })


export default musicReducer;

