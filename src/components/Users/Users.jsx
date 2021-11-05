import React from 'react';
import s from './Users.module.css';
import noPict from '../../img/noavatar.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';



const Users = (props) => {

  let totalPages = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.pagination}>
        {pages.map(p =>
          <span className={s.pageNumber + ' ' + (props.currentPage === p && s.selectPage)} onClick={() => { props.onPageChanged(p) }} >{p}</span>
        )}
      </div>
      <div className={s.users}>

        {props.users.map(u => {
          return (
            <div className={s.item} key={u.id}>
              <NavLink to={'/profile/' + u.id}>
                <div className={s.img}></div>
              </NavLink>
              <div className={s.info}>
                <img src={u.photos.small === null ? noPict : u.photos.small} alt='avatar' className={s.avatar} />

                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn} onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.unfollowUser(u.id)
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.toggleFollow(u.id)
                        };
                        props.toggleFollowingProgress(false, u.id)
                      })
                  }
                  }>Follow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn} onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    usersAPI.followUser(u.id)
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.toggleFollow(u.id)
                        };
                        props.toggleFollowingProgress(false, u.id)
                      })
                  }
                  }>UnFollow</button>}

                <p className={s.fullName}>{u.name}</p>
                <p className={s.userStatus}>{u.status}</p>
                <p className={s.userLocation}>Minsk City</p>
              </div>


            </div>
          )
        })}


      </div>
    </div >

  )
}

export default Users;