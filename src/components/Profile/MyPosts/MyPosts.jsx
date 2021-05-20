import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = () => {

  let posts = [
    { id: 1, post: "Hi", likesCount: "15" },
    { id: 2, post: "How is your doing", likesCount: "15" },
    { id: 3, post: "I am the first!", likesCount: "-15" },
    { id: 4, post: "Youre not", likesCount: "5" },
  ]

  let postsElements = posts.map((p) => {
    return <Post message={p.post} likes={p.likesCount} />
  })
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
