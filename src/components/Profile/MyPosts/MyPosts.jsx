import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text' id="" cols="50" rows="3" name='post' component='textarea' />
      </div>
      <div>
        <button type='submit'>Add post</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)





const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => {
    return <Post message={p.post} key={p.id} likes={p.likesCount} />
  })

  const [postId, setPostId] = useState(5)


  const formPostSubmit = (formData) => {
    console.log(formData)
    props.addPostThunk(formData.post, postId)
    setPostId(postId + 1)
  }

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <PostReduxForm onSubmit={formPostSubmit} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
