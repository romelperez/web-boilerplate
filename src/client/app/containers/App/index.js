import React      from 'react';
import i18n       from 'shared/i18n';
import Container  from 'client/components/main/Container';
import Header     from 'client/components/main/Header';
import Content    from 'client/components/main/Content';
import Footer     from 'client/components/main/Footer';

const App = React.createClass({
  render () {

    const title = i18n.t('app.title');

    return (
      <Container className='app'>
        <Header>
          {title}
        </Header>
        <Content>
          <div className='row'>
            <div className='column small-12'>
              <h1>{title}</h1>
            </div>
          </div>
        </Content>
        <Footer />
      </Container>
    );
  },
});

export default App;
