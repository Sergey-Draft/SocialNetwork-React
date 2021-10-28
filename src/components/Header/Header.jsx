import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
    <header className ={s.header} >
    <img src='https://w7.pngwing.com/pngs/635/870/png-transparent-logo-flower-flower-purple-violet-logo.png' alt="header"></img>
    <div className={s.login}>
      {props.isAuth ? props.login:
      <NavLink to={'/login'} >Login</NavLink>
      }
      
    </div>
  </header>
    )
}

export default Header;