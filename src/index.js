import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/store.js'
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        store = {store}
        dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
