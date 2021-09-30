import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      <div>
        <img src='https://www.prelepapoezija.com/wp-content/uploads/2015/01/hed2.jpg' />
      </div>
      <div className={s.descriptionBlock}>

        <div className="intro">
          <img src={props.profile.photos.large} alt='userPhoto' />
        </div>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo;
