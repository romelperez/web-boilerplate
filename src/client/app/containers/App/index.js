import React from 'react';
import { Row } from 'react-foundation';

import i18n       from 'shared/i18n';
import Container  from 'client/components/main/Container';
import Header     from 'client/components/main/Header';
import Content    from 'client/components/main/Content';
import Footer     from 'client/components/main/Footer';
import Users      from '../Users';

const App = React.createClass({
  render () {

    const title = i18n.t('app.title');

    return (
      <Container className='app'>
        <Header>
          {title}
        </Header>
        <Content>
          <Users />
          <Row isColumn>
            <p>Done? <a href='/logout'>Logout</a>.</p>
          </Row>
        </Content>
        <Footer />
      </Container>
    );
  },
});

export default App;
