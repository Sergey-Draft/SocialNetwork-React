import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setDataAC } from '../redux/newsReducer';
import News from './News';

class NewsContainer extends React.Component {
  constructor(props){
    super()
  }

    componentDidMount = () =>{
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-09-10&sortBy=publishedAt&apiKey=bb82a5810e234f13b51b63d3bc4d52ba')
        .then(response => 
            {this.props.setNewData(response.data.articles.slice(0,1))})

    }

  render(){
    
    return<>
      <News dataNews={this.props.dataNews} setNewData={this.props.setNewData}/>
      </>
  }
}


let mapStateToProps = (state) => {
  return {
    dataNews: state.newsPage.dataNews,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setNewData: (dataNews) => {
      dispatch(setDataAC(dataNews))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
