import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import s from './Header.module.css'

const Header = (props) => {

/*   const handleLogout = () => {
    props.userLogoutThunk()
    if(props.isAuth === true ) {
      return <Redirect to={'/dialogs'}/>
    }
     
  } */


    return (
    <header className ={s.header} >
    <img src='https://w7.pngwing.com/pngs/635/870/png-transparent-logo-flower-flower-purple-violet-logo.png' alt="header"></img>
    <div className={s.login}>
      {props.isAuth 
      ? <div> <button onClick={props.userLogoutThunk} > Logout </button><span> {props.login} </span></div>
      :<NavLink to={'/login'} >Login</NavLink>
      }
    </div>
  </header>
    )
}

export default Header;