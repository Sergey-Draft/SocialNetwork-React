import React from 'react';
import f from './Video.module.css';

import { useState } from 'react';
import { searchYouTube } from '../../api/api';
import YouTube from 'react-youtube';

import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'

const Video = (props) => {

  const [query, setQuery] = useState('музыка 2021');
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
    <div className={f.videoWrapper}>
      <div className={f.header}>
        <span className="fa fa-youtube fa-5x" style={{ color: 'red' }} aria-hidden="true"></span>
         <span className={f.reactIcon}  ><FaReact/></span>
         <span className={f.javascriptIcon}  ><IoLogoJavascript/></span>    
      </div>

       <div className={f.intro} >find and watch</div> 

      <div className={f.searchWrapper}>
        <form onSubmit={search} className={f.form}>
          <input className={f.input} autoFocus value={query} onChange={e => setQuery(e.target.value)} />
          <button className={f.button}>Search YouTube</button>
        </form>
      </div>



      {list && (list.length === 0
        ? <p>No results</p>
        : (
          <div className={f.videoItems}>
            {list.map(i => (
              <>
                <div className={f.videoItem} key={i.id} onClick={() => { props.setVideoID(i.id) }} >
                  <img alt="title_img" className={f.videoImg} src={i.bestThumbnail.url} />
                  <div className={f.videoDescription}>
                    <div className={f.videoName}>{i.title}</div>
                    <div className={f.videoDetails}>
                      <div>By: <img alt="author" src={i.author.bestAvatar.url} style={{ width: '30px', height: '30px', borderRadius: '50%', bottom: '-15px' }} /> {i.author.name}</div>
                      <div>Views: {i.views}</div>
                      <div>Duration: {i.duration}</div>
                      <div>Uploaded: {i.uploadedAt}</div>
                    </div>
                  </div>
                </div>

                {/*  YouTube player */}
                {props.videoID === i.id ?
                  <div className={f.videoBlock}>
                    <div className={f.videoPlayer}><YouTube videoId={props.videoID} opts={{ height: '300px', width: '100%' }} onReady={onReady} /> </div>
                    <div className={f.closeVideo} onClick={() => { props.setVideoID(null) }}><span>Close player</span></div>
                  </div>
                  : null}
              </>

            ))}
          </div>
        )
      )
      }


    </div>

  );
}

export default Video;



