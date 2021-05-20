import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' alt="avatar" />
      {props.message}
      <div>
        <span> Likes {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;
