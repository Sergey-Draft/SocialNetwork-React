import React from 'react';
import { connect } from 'react-redux';
import s from './Music.module.css';
import { setMusicAC } from '../redux/musicReducer';
import MusicC from './MusicC';

let mapStateToProps = (state) => {
    return {
        genre: state.musicPage.genre
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setGenre: (genre) => {
            dispatch(setMusicAC(genre))
        }
    }
}


const musicContainer = connect(mapStateToProps, mapDispatchToProps)(MusicC)

export default musicContainer;