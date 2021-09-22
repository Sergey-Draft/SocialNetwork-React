import React from 'react';
import s from './Users.module.css';
import noPict from '../../img/noavatar.png'



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
                <div className={s.img}></div>

                <div className={s.info}>
                  <img src={u.photos.small === null ? noPict : u.photos.small} alt='avatar' className={s.avatar} />
                  {u.followed
                    ? <span className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>Follow</span>
                    : <span className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>UnFollow</span>}

                  <p className={s.fullName}>{u.name}</p>
                  <p className={s.userStatus}>{u.status}</p>
                  <p className={s.userLocation}>Minsk City</p>

                </div>

              </div>
            )
          })}


        </div>
      </div>

    )
}

export default Users;