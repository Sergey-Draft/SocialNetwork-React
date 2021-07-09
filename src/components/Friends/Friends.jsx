import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
   /* let path = '/friends/' + props.state.friends.id[0]; */
   let friends = props.state.friends.map(el => {
      return (
         <div className={s.item}>
            <img src={el.imgurl} alt='friend_avatar' />
            <span className={s.indicator}></span>
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