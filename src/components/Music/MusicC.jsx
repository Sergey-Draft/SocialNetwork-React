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
      axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio', {
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': 'e7029884d4msh9ffb9181fd2d821p1c553ajsn7e425776caab'
        }
      })
        .then(response => {
          this.props.setGenre(response.data.data)
        })
    }

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

      <div>
        <p>Music</p>
     {  this.props.currentRadioLink?
      <ReactAudioPlayer
      src={this.props.currentRadioLink}
      autoPlay
      controls
      
    />: null
     }
        <div className={s.play__list__wrapper}>
          <div className={s.play__list}>
            <div className={s.play__items}>

              {this.props.genre.slice(0, 3).map(g => {
                return (

                  <div className={s.item} onClick={() => { this.getTrackListURL(g.tracklist); {this.getTrackList()} }}  >
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
              <div className={s.trackTitle} onClick={() => { this.setCurrentLinkToState(tr.preview)}}>{tr.title}</div>
              <div className={s.playerComp}>
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

