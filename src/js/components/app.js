const _ = require('underscore');
const React = require('react');
const ReactDOM = require('react-dom');

const Widget = require('./widget');

let App = React.createClass({

  getInitialState: function () {
    return {
      data: [
        {id: 0, name: 'Romel Pérez'},
        {id: 1, name: 'Natalia Contreras'}
      ]
    };
  },

  render: function () {
    let rows = this.state.data.map(d => {
      return <Widget key={d.id} data={d} />;
    });

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = App;
