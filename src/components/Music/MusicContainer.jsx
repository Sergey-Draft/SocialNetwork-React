import React from 'react';
import { connect } from 'react-redux';
import { setCurrentRadioLinkAC, setMusicAC, trackListAC, trackListURLAC } from '../redux/musicReducer';
import MusicClass from './MusicClass';

let mapStateToProps = (state) => {
    return {
        genre: state.musicPage.genre,
        currentRadioLink: state.musicPage.currentRadioLink,
        tracklistURL: state.musicPage.tracklistURL,
        tracklist: state.musicPage.tracklist,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGenre: (genre) => {
            dispatch(setMusicAC(genre))
        },
        setCurrentRadioLink: (link) => {
            dispatch(setCurrentRadioLinkAC(link))
        },
        setTrackListURL: (tracklistURL) => {
            dispatch(trackListURLAC(tracklistURL))
        },
        setTrackList: (tracklist) => {
            dispatch(trackListAC(tracklist))
        },
    }
}


const musicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicClass)

export default musicContainer;