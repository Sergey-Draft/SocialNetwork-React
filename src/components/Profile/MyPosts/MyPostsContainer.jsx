import { connect } from 'react-redux';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },

    addPost: () => {
      dispatch(AddPostActionCreator())
    }
}
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
