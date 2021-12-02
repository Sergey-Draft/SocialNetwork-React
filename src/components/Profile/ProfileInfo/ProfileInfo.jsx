import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import iAm from '../../../img/45.jpg';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      <div>
        <img src='https://www.prelepapoezija.com/wp-content/uploads/2015/01/hed2.jpg' />
      </div>
      <div className={s.descriptionBlock}>

        <div className="intro">
          {props.profile.userId === 19960 
          ? <img src={iAm} alt='userPhoto' style={{width: '200px'}} />
          :<img src={props.profile.photos.large} alt='userPhoto' />}
          
        </div>
        <div>
          {props.profile.userId}
        </div>
        <div>
          {props.profile.fullName}
        </div>
        ava+description!!!!!!!
      </div>
    </div>
  )
}

export default ProfileInfo;
