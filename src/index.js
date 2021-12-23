import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
  
  ReactDOM.render(
    <BrowserRouter>

        <Provider store={store}>
        
          <App/>

        </Provider>

    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerenderEntireTree();


store.subscribe(() => {
  rerenderEntireTree()
});

reportWebVitals();
