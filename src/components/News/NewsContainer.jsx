import { connect } from 'react-redux';
import { setDataAC } from '../redux/newsReducer';
import News from './News';

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
  
  
  const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
  
  export default NewsContainer;