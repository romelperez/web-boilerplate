const _ = require('underscore');
const React = require('react');
const ReactDOM = require('react-dom');

let App = require('./components/app');

const appContainer = document.querySelector('#app');
let appComponent = <App />;
ReactDOM.render(appComponent, appContainer);

window.appComponent = appComponent;
