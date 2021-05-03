import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://www.prelepapoezija.com/wp-content/uploads/2015/01/hed2.jpg' />
      </div>
      <div className={s.user}>
        ava+description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
