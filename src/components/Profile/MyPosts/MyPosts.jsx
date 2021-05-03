import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'
const MyPosts = () => {

  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>

      <div className={s.posts}>
        <Post message = 'Hello, how are you?' like = '15' />
        <Post message = 'All my life is here' like = '20' />
      </div>
    </div>
  )
}

export default MyPosts;
