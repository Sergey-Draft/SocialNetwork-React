import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';
import s from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`} >
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/video' activeClassName={s.active}>Videos</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/form' activeClassName={s.active}>Form</NavLink>
      </div>
      <div>
        <FriendsContainer/>
      </div>
    </nav>
  )
}

export default Navbar;
