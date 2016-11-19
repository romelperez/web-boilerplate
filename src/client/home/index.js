import React from 'react';
import { render } from 'react-dom';
import { Row, Column } from 'react-foundation';

const root = document.querySelector('#app');

function App () {
  return (
    <main className='home'>
      <Row>
        <Column small={12}>
          <h1>Home</h1>
        </Column>
        <Column small={12}>
          <p>Home Application Site.</p>
        </Column>
      </Row>
    </main>
  );
}

render(<App />, root);
