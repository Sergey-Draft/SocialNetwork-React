import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ContextLogin from '../context/context';
/* import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'; */
import s from './Header.module.css'

const Header = (props) => {
  /*   const handleLogout = () => {
      props.userLogoutThunk()
      if(props.isAuth === true ) {
        return <Redirect to={'/dialogs'}/>
      }
       
    } */
    

    let {modalActive, setModalActive}=useContext(ContextLogin)

  return (
    
      <header className={s.header} >
        <img src='https://w7.pngwing.com/pngs/635/870/png-transparent-logo-flower-flower-purple-violet-logo.png' alt="header"></img>
        <div className={s.login}>
          {props.isAuth
            ? <div> <span onClick={props.userLogoutThunk} > Logout </span><span> {props.login} </span></div>
            : <NavLink to={'/login'} onClick={()=>{setModalActive(true)} } >Login</NavLink>
          }
        </div>
      </header>
  )
}

export default Header;