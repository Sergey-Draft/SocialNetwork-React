import React from 'react';
import { AddPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.post} likes={p.likesCount} />
  })

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch( AddPostActionCreator() );
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost} >Add Post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
