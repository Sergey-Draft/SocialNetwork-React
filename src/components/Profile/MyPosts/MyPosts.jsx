import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  
  let postsElements = props.posts.map((p) => {
    return <Post message={p.post} key={p.id} likes={p.likesCount} />
  })

  let newPostElement = React.createRef();



  const onAddPost = () => {
    props.addPost();
    newPostElement.current.value = '';
  }

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost} >Add Post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
