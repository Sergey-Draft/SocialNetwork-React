import React from 'react';
import { connect } from 'react-redux';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import MyPosts from './MyPosts';


/* const MyPostsContainer = () => {



  return (
    <StoreContext.Consumer >
      {(store) => {

        let state = store.getState();

        const addPost = () => {
          store.dispatch(AddPostActionCreator());
        }

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }

        return <MyPosts updateNewPostText={onPostChange}
          addPost={addPost} posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText} />
      }
      }
    </StoreContext.Consumer>
  )
} */



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
