import React from 'react';
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar /* state={props.store.getState().sideBar} */ />

      <div className='app-wrapper-content'>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  )
}

export default App;
