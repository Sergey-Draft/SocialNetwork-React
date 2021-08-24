import React from 'react';
import s from './Music.module.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import { useState, useEffect } from 'react';
import axios from 'axios';

class MusicC extends React.Component {

  constructor(props) {
    super()
  }


  componentDidMount() {
    if(this.props.genre.length === 0) {
      axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
      .then(response => {
        this.props.setGenre(response.data.data)
      })
  }
    }



  render() {
    return (
      <div>
        <p>Music</p>
        {this.props.genre.map(g => {
          return (
            <div className={s.genre}>
              <div className={s.id}>{g.id}111</div>
              <div className={s.title}>{g.name}</div>
              <div className={s.img}></div>
            </div>
          )
        })}

      </div>
    )
  }

}

export default MusicC;


/*       <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8'
          width='100%'
          height='100%'
        />
      </div>

      <ReactAudioPlayer
        src="https://pub0301.101.ru:8443/stream/air/mp3/256/219"
        autoPlay
        controls
      />
 */
