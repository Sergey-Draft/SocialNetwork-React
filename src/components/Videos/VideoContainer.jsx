import React from 'react';
import { connect } from 'react-redux';
import { setVideoIDAC } from '../redux/videoReducer';
import Video from './Video';


const mapStateToProps = (state) => {
  return {
    videoID: state.videoPage.videoID
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setVideoID: (videoID) => {
      dispatch(setVideoIDAC (videoID)) 
    }
  }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Video)