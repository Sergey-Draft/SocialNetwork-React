import { connect } from 'react-redux';
import { addPostThunk } from '../../redux/profileReducer';
import MyPosts from './MyPosts';



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPostThunk })(MyPosts);

export default MyPostsContainer;
