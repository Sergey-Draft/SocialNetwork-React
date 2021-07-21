import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
   let friends = props.state.friends.map(el => {
      return (
         
         <div className={s.item}>
            <NavLink to ='/dialogs/'>
            <img src={el.imgurl} alt='friend_avatar' />
            <span className={s.indicator}></span>
            </NavLink>
         </div>

      )
   })
   return (
      <div className={s.friends}>
         <div className={s.title}>
            <div className={s.text}>Chat online</div>
         </div>
         <div class={s.friendsItems}>
            {friends}
         </div>

      </div>
   )
}

export default Friends;