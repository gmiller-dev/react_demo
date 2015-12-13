require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import WordBank from './WordBank.jsx';

ReactDOM.render(
  <WordBank />,
  document.getElementById('content')
);
