import React from 'react';
import s from './Music.module.css';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



class MusicClass extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {

    var options = {
      method: 'GET',
      url: 'https://radio-browser.p.rapidapi.com/json/stations',
      params: { reverse: 'false', offset: '0', limit: '10', hidebroken: 'false' },
      headers: {
        'x-rapidapi-host': 'radio-browser.p.rapidapi.com',
        'x-rapidapi-key': 'e7029884d4msh9ffb9181fd2d821p1c553ajsn7e425776caab'
      }
    };

    axios.request(options)
      .then(response => {
        console.log(response.data)
        this.props.setGenre(response.data)
      }

      )

  }


  getTrackListURL = (param) => {
    this.props.setTrackListURL(param)
  }

  getTrackList = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/${this.props.tracklistURL}`)
      .then(response => {
        this.props.setTrackList(response.data.data)
      })
  }


  setCurrentLinkToState = (param) => {
    this.props.setCurrentRadioLink(param)
  }






  render() {
    return (



      <div className={s.radioPage}>
        <p>Music</p>
        {this.props.currentRadioLink ?
          <ReactAudioPlayer
            src={this.props.currentRadioLink}
            autoPlay
            controls

          /> : null
        }
        <div className={s.play__list__wrapper}>
          {this.props.genre.slice(0, 6).map(g => {
            return (
              <div className={s.item} onClick={() => { /* this.getTrackListURL(g.tracklist); {this.getTrackList()}  */ this.setCurrentLinkToState(g.url) }}  >

                <img className={s.lable} src={g.favicon} alt={g.id} />
                <div>
                  <div className={s.title}>{g.name}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/*         {this.props.tracklist.slice(0, 10).map(tr => {
          return (
            <div className={s.tracklist}>
              <div className={s.trackTitle} onClick={() => { this.setCurrentLinkToState(tr.preview)}}>{tr.title}</div>
              <div className={s.playerComp}>
              </div>
              <div className={s.trackName} >{tr.artist.name}</div>
              <div></div>
            </div>

          )
        })} */}



      </div>





    )

  }

}

export default MusicClass;

