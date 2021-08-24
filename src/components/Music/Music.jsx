import React from 'react';
import s from './Music.module.css';
import './slider.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import pic from '../../img/slider/5eb63513bf879image.jpg';
import pic2 from '../../img/slider/WhatsGoodnewsimage.jpg';
import pic3 from '../../img/slider/best-dance-clubs-lisbon-portugal.jpg';
import pic4 from '../../img/slider/5eb63513bf879image.jpg';
import pic5 from '../../img/slider/5eb63513bf879image.jpg';
import { useState, useEffect } from 'react';

const Music = () => {

  let playList = "https://www.youtube.com/playlist?list=LL8J3iUbOyyzMyIDXhx9q9OA";
  <script src="http://www.gmodules.com/ig/ifr?url=http://www.google.com/ig/modules/youtube.xml&up_channel=UC8J3iUbOyyzMyIDXhx9q9OA&synd=open&w=320&h=390&title=&border=%23ffffff%7C3px%2C1px+solid+%23999999&output=js"></script>

  
  



  return (
    <div>
      <div>Music</div>
      <iframe id="player" type="text/html" width="640" height="360"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
        frameborder="0"></iframe>


      <div className='player-wrapper'>
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
















{/*         <div class="main__wrapper">
          <div class="row">
            <div class="col s12 items__slider">
              <div class="all__items" style={{ width: 12000 + 'px', transform: translate3d(-430+'px', 0+'px', 0+'px') }}>

                <div class="item__photo prev__item" data-item-photo="-1">
                  <img src={pic} alt="photo1" />
                </div>
                <div class="item__photo active__item" data-item-photo="0">
                  <img src={pic2} alt="photo3" />
                </div>
                <div class="item__photo next__item" data-item-photo="1">
                  <img src={pic3} alt="photo2" />
                </div>
                <div class="item__photo" data-item-photo="2">
                  <img src="./images/underground2.jpg" alt="photo4" />
                </div>
                <div class="item__photo" data-item-photo="3">
                  <img src="./images/How-to-Make-a-Good-Spotify-Playlist-e1559562327608.jpeg" alt="photo5" />
                </div>
                <div class="item__photo " data-item-photo="4">
                  <img src="./images/5eb63513bf879image.jpg" alt="photo1" />
                </div>
                <div class="item__photo " data-item-photo="5">
                  <img src="./images/WhatsGoodnewsimage.jpg" alt="photo3" />
                </div>
                <div class="item__photo " data-item-photo="6">
                  <img src="./images/best-dance-clubs-lisbon-portugal.jpg" alt="photo2" />
                </div>
                <div class="item__photo" data-item-photo="7">
                  <img src="./images/underground2.jpg" alt="photo4" />
                </div>
                <div class="item__photo" data-item-photo="8">
                  <img src="./images/How-to-Make-a-Good-Spotify-Playlist-e1559562327608.jpeg" alt="photo5" />
                </div>

              </div>
              This div is 12-columns wide on all screen sizes
                    <ul class="items__button">
                        <li class="dot__item dot__active">
                            <button>1</button>
                        </li>
                        <li class="dot__item ">
                            <button>1</button>
                        </li>
                        <li class="dot__item">
                            <button>1</button>
                        </li>
                        <li class="dot__item">
                            <button>1</button>
                        </li>
                        <li class="dot__item">
                            <button>1</button>
                        </li>
                    </ul>
            </div>

          </div>

        </div> */}


    </div>
  )
}

export default Music;