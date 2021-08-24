import React from 'react';
import s from './Users.module.css';
import avatar1 from '../../img/user-3.jpg';
import avatar2 from '../../img/user2.jpg';
import avatar3 from '../../img/user3.jpg';
import { assertExpressionStatement } from '@babel/types';
import * as axios from 'axios';

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get('https://randomuser.me/api/')
    .then(response => {
      props.setUsers(response.data.results);
    } )
    axios.get('https://randomuser.me/api/')
    .then(response => {
      props.setUsers(response.data.results);
    } )
  }




/*   if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: true, avatar: avatar1, fullName: "Andrew G.", Location: { city: "Minsk", country: "Belarus" }, status: "I am just looking for a new friends..." },
      { id: 2, followed: false, avatar: avatar2, fullName: "Dima K.", Location: { city: "Minsk", country: "Belarus" }, status: "I am busy and rude ass..." },
      { id: 3, followed: true, avatar: avatar3, fullName: "Olga M.", Location: { city: "Minsk", country: "Belarus" }, status: "Pretty perfect girl looks for relationship" }
    ])
  } */



  let userItem = props.users.map(u => {
    return (
      <div className={s.item} key={u.id}>
        <div className={s.img}></div>

        <div className={s.info}>
          <img src=/* {u.avatar} */ {u.picture.large}alt='avatar' className={s.avatar} />
          {u.followed
            ? <span className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>Follow</span>
            : <span className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>UnFollow</span>}

          <p className={s.fullName}>{/* {u.fullName} */}{u.name.title} {u.name.first}</p>
          <p className={s.userStatus}>{/* {u.status} */}</p>
          <p className={s.userLocation}>{u.location.city}</p>

        </div>

      </div>
    )
  })

  return (
    <div className={s.users}>
      {userItem}

    </div>
  )


}

export default Users;
