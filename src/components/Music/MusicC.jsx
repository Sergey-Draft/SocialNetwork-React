import React from 'react';
import s from './Music.module.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';





class MusicC extends React.Component {
  constructor(props) {
    super()
  }


  componentDidMount() {
    if (this.props.genre.length === 0) {
      axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio')
        .then(response => {
          this.props.setGenre(response.data.data)
        })
    }
  }

  componentDidUpdate() {
    <ReactAudioPlayer
      src={this.props.currentRadioLink}
      autoPlay
      controls
    />
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


  currentLinkToState = (param) => {
    this.props.currentRadioLink(param)
  }



  render() {
    return (
      <div>
        <p>Music</p>
        <ReactAudioPlayer
          src={this.props.currentRadioLink}
          autoPlay
          controls
          onAbort
        />

        <div className={s.play__list__wrapper}>
          <div className={s.play__list}>
            <div className={s.play__items}>

              {this.props.genre.slice(0, 6).map(g => {
                return (

                  <div className={s.item} onClick={() => { this.getTrackListURL(g.tracklist); { this.getTrackList() } }}  >
                    <div className={s.content__item} >
                      <a className={s.current__playlist} href="#">
                        <div className={s.lable}>
                          <img src={g.picture_medium} alt={g.id} />
                        </div>
                        <span className={s.title}>{g.title}</span>
                      </a>
                    </div>
                  </div>

                )

              })}
            </div>
          </div>
        </div>

        {this.props.tracklist.slice(0, 10).map(tr => {
          return (
            <div className={s.tracklist}>
              <div className={s.trackTitle} onClick={() => { this.currentLinkToState(tr.preview)}}>{tr.title}</div>
              <div className={s.playerComp}>
                <ReactAudioPlayer
                  src={this.props.currentRadioLink}
                  autoPlay
                  controls
                />
              </div>
              <div className={s.trackName} >{tr.artist.name}</div>
              <div></div>
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
