import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const rootEl = document.querySelector('#app');

const render = function () {
  ReactDOM.render(<App />, rootEl);
};

export default render;
