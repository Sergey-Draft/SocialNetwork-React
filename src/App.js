import React, { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import MusicContainer from './components/Music/MusicContainer';
import Navbar from './components/Navbar/Navbar.jsx';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Setting';
import UsersContainer from './components/Users/UsersContainer';
import 'font-awesome/css/font-awesome.min.css';
import VideoContainer from './components/Videos/VideoContainer';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import ContextLogin from './components/context/context';

const App = (props) => {

  const [modalActive, setModalActive] = useState(true)

  return (
    <ContextLogin.Provider value={{modalActive, setModalActive}} >
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'>
          <ProfileContainer />
        </Route>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/video' render={() => <VideoContainer />} />
        <Route path='/music' render={() => <MusicContainer />} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/form' render={() => <Form />} />
        <Route path='/login' render={() => <Login />} />


      </div>
    </div>
              </ContextLogin.Provider>
  )

  
}

export default App;
