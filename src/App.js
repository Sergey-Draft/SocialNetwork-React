import React from 'react';
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

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'>
          <ProfileContainer />
        </Route>
        <Route path='/dialogs' render={() => <DialogsContainer />} />

        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/music'
          render={() => <MusicContainer />} />
        <Route path='/settings' component={Settings} />
        <Route path='/users'
          render={() => <UsersContainer />} />


      </div>
    </div>
  )
}

export default App;
