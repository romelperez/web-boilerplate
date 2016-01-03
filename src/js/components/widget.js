const _ = require('underscore');
const React = require('react');
const ReactDOM = require('react-dom');

const Widget = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
};

module.exports = Widget;
