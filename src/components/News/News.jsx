
import React from 'react';
import s from './News.module.css';
import Preloader from '../common/Preloader';

const News = (props) =>{
    if(!props.dataNews){
        return <Preloader/>
    }
        return(
            <div>
                
                <a href={props.dataNews[0].url}>{props.dataNews[0].title}</a>
                <img src={props.dataNews[0].urlToImage} alt='title' style={{height:'200px', width:'200px' }}/>
            </div>
        )
}

export default News;


/* {!this.props.dataNews ? <Preloader/>  : null } */
