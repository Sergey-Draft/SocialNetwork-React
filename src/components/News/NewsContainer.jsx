import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setDataAC } from '../redux/newsReducer';
import News from './News';

class NewsContainer extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount = () => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => { this.props.setNewData(response.data.slice(0, 10)) })
  }

  render() {

    return <>
    ver 2
      <News dataNews={this.props.dataNews} /* setNewData={this.props.setNewData} */ />
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
