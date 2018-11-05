import React from 'react';
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render((

  <HashRouter>
    <App/>
  </HashRouter>
), document.getElementById('root'));
