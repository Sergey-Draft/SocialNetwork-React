import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.prelepapoezija.com/wp-content/uploads/2015/01/hed2.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;
