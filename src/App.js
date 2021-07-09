import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Setting';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sideBar} />
        <div className='app-wrapper-content'>
          <Route exact path='/profile'>
            <Profile profilePage={props.state.profilePage}
              dispatch={props.dispatch} />
          </Route>
          {/* <Route path='/profile' render={() => <Profile posts={props.posts} />} /> */}
          <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
