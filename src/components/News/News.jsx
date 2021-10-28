
import React from 'react';
import s from './News.module.css';
import Preloader from '../common/Preloader';

const News = (props) =>{
    if(!props.dataNews){
        return <Preloader/>
    }


        return(
            <div>
                {props.dataNews.map(i => {
                    return (
                        <div key={i.id}>
                <div>{i.name}</div>
                <img src={i.image_url} alt='title' style={{height:'300px', width:'150px' }}/>
                <div>{i.brewers_tips} </div>
                        </div>
                    )
                })}

            </div>
        )
}

export default News;


