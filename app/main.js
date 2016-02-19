require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock.jsx';

ReactDOM.render(
  <Clock/>,
  document.getElementById('content')
);
