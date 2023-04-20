import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Main from './routes';
import store from './Provider/store';
import {BrowserRouter as Router} from 'react-router-dom'
import ('./assets/css/index.css')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Main/>
      </Router>
    </Provider>
  </React.StrictMode>
);

