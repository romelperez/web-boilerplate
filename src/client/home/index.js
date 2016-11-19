import React      from 'react';
import { render } from 'react-dom';
import { Row }    from 'react-foundation';
import i18n       from 'shared/i18n';
import Container  from 'client/components/main/Container';
import Header     from 'client/components/main/Header';
import Content    from 'client/components/main/Content';
import Footer     from 'client/components/main/Footer';

function App () {

  const title = i18n.t('home.title');

  return (
    <Container className='home'>
      <Header>
        {title}
      </Header>
      <Content>
        <Row isColumn={true}>
          <p>Home site long content used as principal entry in web application.</p>
          <p><a href='/login'><b>Login</b></a> or <a href='/app'><b>App</b></a>.</p>
        </Row>
      </Content>
      <Footer />
    </Container>
  );
}

const root = document.querySelector('#app');

render(<App />, root);
