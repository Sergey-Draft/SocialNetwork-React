import React from 'react';
import { connect } from 'react-redux';
import s from './Music.module.css';
import { currentRadioLinkAC, setMusicAC, trackListAC, trackListURLAC } from '../redux/musicReducer';
import MusicC from './MusicC';

let mapStateToProps = (state) => {
    return {
        genre: state.musicPage.genre,
        currentRadioLink: state.musicPage.currentRadioLink,
        tracklistURL: state.musicPage.tracklistURL,
        tracklist: state.musicPage.tracklist
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGenre: (genre) => {
            dispatch(setMusicAC(genre))
        },
        currentRadioLink: (link) => {
            dispatch(currentRadioLinkAC(link))
        },
        setTrackListURL: (tracklistURL) => {
            dispatch(trackListURLAC(tracklistURL))
        },
        setTrackList: (tracklist) => {
            dispatch(trackListAC(tracklist))
        }
    }
}


const musicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicC)

export default musicContainer;