import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  console.log(props)
  return (
    <div className={s.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg' />
      {props.message}
      <div>
        <span> Like {props.like}</span>
      </div>
    </div>
  )
}

export default Post;
