import axios from 'axios';
import React from 'react';
import s from './News.module.css';
import Preloader from '../common/Preloader';

class News extends React.Component {
    constructor(props){
        super()
    }

/*     setNewData = (data) => {
        this.data = data
    } */

    componentDidMount = () =>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-10&sortBy=publishedAt&apiKey=bb82a5810e234f13b51b63d3bc4d52ba')
        .then(response => 
            {this.props.setNewData(response.data.articles.slice(0,1)); /* console.log(this.data[0].url) */})

    }


    render(){
        return(
            <div>
                <a href={this.props.dataNews[0].url}>{this.props.dataNews[0].title}</a>
                <img src={this.props.dataNews[0].urlToImage} alt='title' style={{height:'200px', width:'200px' }}/>

            </div>
        )
    }

}

export default News;