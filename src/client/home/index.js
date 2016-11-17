import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Column } from 'vulcangrid';

console.log('Home Script File.');

const root = document.querySelector('#app');

function App () {
  return (
    <main className='home'>
      <Row>
        <Column sm={12}>
          <h1>Home</h1>
        </Column>
      </Row>
    </main>
  );
}

ReactDOM.render(<App />, root);
