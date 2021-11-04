import React from 'react';
import f from './MusicFunctional.module.css';

import { useState, useEffect } from 'react';
import { searchYouTube } from '../../api/api';
import { NavLink } from 'react-router-dom';
import YouTube from 'react-youtube';

const Music = (props) => {
  const [query, setQuery] = useState('European history');
  const [list, setList] = useState(null);
  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };


  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <div className={f.ap}>
      <form onSubmit={search} className={f.form}>
        <input className={f.input} autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <button className={f.button}>Search YouTube</button>
      </form>
      {list &&
        (list.length === 0
          ? <p>No results</p>
          : (
            <ul className={f.items}>
              {list.map(item => (
                <>
                  <li className={f.item} key={item.id}>
                    <div>
                      <b onClick={() => { props.setVideoID(item.id) }} ><a href={item.link}>{item.title}</a></b>
                      <p>react-youtube Features Installation Usage Example Controlling the player License. README.md. react-youtube. Simple React component acting as a thin layer over the YouTube IFrame Player API. Features. url playback. ... The API component will pass an event object as the sole argument to each of those functions the event handler props. The event object has the following properties: The event's target identifies the video player that corresponds to the even </p>
                    </div>
                    <ul className={f.meta}>
                      <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                      <li>Views: {item.views}</li>
                      <li>Duration: {item.duration}</li>
                      <li>Uploaded: {item.uploadedAt}</li>
                    </ul>
                    <img alt="title_img" src={item.bestThumbnail.url} />


                  </li>
                  
                  {props.videoID === item.id ? 
                  <div className={f.videoBlock}>
                  <div className={f.videoPlayer}><YouTube videoId={props.videoID} opts={{ height: '390', width: '640' }} onReady={onReady} /> </div>
                  <span className={f.closeVideo} onClick={() => {props.setVideoID(null)}}>X</span> 
                  </div>
                  : null}
                  

                </>
              )
              )}
            </ul>
          )
        )
      }


    </div>



  );
}

export default Music;