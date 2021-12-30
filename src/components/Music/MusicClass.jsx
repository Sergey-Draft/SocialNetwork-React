import React from 'react';
import s from './Music.module.css';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import noRadioPict from '../../img/noRadioPict.jpg'
import 'react-awesome-slider/dist/styles.css';
import Preloader from '../common/Preloader';



class MusicClass extends React.Component {
  constructor(props) {
    super()

    this.state = {
      opacity: false,
      stationuuid: '',
      display: 'block'
    }
  }

  opacityOn = (id) => {
    this.setState({
      opacity: 1,
      stationuuid: id
    })
  }

  opacityOff = () => {
    this.setState({
      opacity: 0,
      stationuuid: '',
    })
  }



  componentDidMount() {

    var options = {
      method: 'GET',
      url: 'https://radio-browser.p.rapidapi.com/json/stations',
      params: { reverse: 'false', offset: '0', limit: '20', hidebroken: 'false' },
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


  setCurrentLinkToState = (param) => {
    this.props.setCurrentRadioLink(param)
    this.setState({
      display: 'block'
    })
  }

  playerPreloaderOff = () => {
    this.setState({
      display: 'none'
    })
  }


  render() {
    return (

      <div className={s.radioPage}>
        <p>Music</p>
        <div className={s.play__list__wrapper}>
          {this.props.genre.slice(0, 16).map(g => {
            return (
              <>
                <div className={g.url === this.props.currentRadioLink ? s.itemActive: s.item } key={g.stationuuid} onClick={() => { this.setCurrentLinkToState(g.url) } }
                  onMouseOver={() => { this.opacityOn(g.stationuuid) }}
                  onMouseOut={() => { this.opacityOff() }}
                >
                  <div className={s.lable}>
                    <img src={g.favicon || noRadioPict} alt={g.id} />
                  </div>

                  <div className={s.title}>
                    <div className={s.name}>{g.name}</div>
                    <div className={s.country}>{g.country}</div>
                    <div className={s.likes}>&hearts; {g.votes}</div>
                  </div>

                  <div className={s.playRadioButton} style={(g.stationuuid === this.state.stationuuid) ? { opacity: +this.state.opacity } : { opacity: '0' } } >
                    <i className="fa fa-play"></i>
                  </div>

                </div>

                {this.props.currentRadioLink === g.url ?
                    <div>
                      <div style={{display: this.state.display}}>Loading...</div>
                  <ReactAudioPlayer
                    src={this.props.currentRadioLink}
                    autoPlay
                    controls
                    volume={0.2}
                    onCanPlay = {()=>{this.playerPreloaderOff()}}
                  /> 
                    </div> : null

                }
              </>
            )
          })}
        </div>

      </div>





    )

  }

}

export default MusicClass;

