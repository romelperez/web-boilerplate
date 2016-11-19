import React from 'react';
import { Row, Callout } from 'react-foundation';

import i18n       from 'shared/i18n';
import validators from 'shared/tools/validators';
import data       from 'client/data';
import Container  from 'client/components/main/Container';
import Header     from 'client/components/main/Header';
import Content    from 'client/components/main/Content';
import Footer     from 'client/components/main/Footer';
import Card       from 'client/components/general/Card';

const App = React.createClass({

  form: null,
  errorEl: null,

  getInitialState () {
    return {
      error: ''
    };
  },

  componentDidMount () {
    $(this.form).vulcanval(validators.register);
  },

  render () {

    const title = i18n.t('register.title');

    const error = this.state.error;
    let errorEl;
    if (error) {
      errorEl = (
        <Callout ref={(r => (this.errorEl = r))} color='alert'>{error}</Callout>
      );
    }

    return (
      <Container className='register'>
        <Header>
          {title}
        </Header>
        <Content>
          <Row className='register-content' isColumn={true}>
            <Card>
              {errorEl}
              <form ref={r => (this.form = r)} onSubmit={this.onSubmit}>
                <Row isColumn={true}>
                  <label htmlFor='register-name'>Name</label>
                  <input
                    id='register-name'
                    name='name'
                    type='text'
                    data-vv-display='#register-name-msg'
                  />
                  <div id='register-name-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <label htmlFor='register-email'>Email</label>
                  <input
                    id='register-email'
                    name='email'
                    type='email'
                    data-vv-display='#register-email-msg'
                  />
                  <div id='register-email-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <label htmlFor='register-pwd'>Password</label>
                  <input
                    id='register-pwd'
                    name='pwd'
                    type='password'
                    data-vv-display='#register-pwd-msg'
                  />
                  <div id='register-pwd-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <label htmlFor='register-repwd'>Re-Password</label>
                  <input
                    id='register-repwd'
                    name='repwd'
                    type='password'
                    data-vv-display='#register-repwd-msg'
                  />
                  <div id='register-repwd-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <input className='button' type='submit' value='Register' />
                </Row>
                <Row isColumn={true}>
                  <p>Have an account? <a href='/login'>Login</a>.</p>
                </Row>
              </form>
            </Card>
          </Row>
        </Content>
        <Footer />
      </Container>
    );
  },

  onSubmit (e) {
    e.preventDefault();

    const invalids = $(this.form).vulcanval('inspect');

    if (!invalids) {
      this.enter();
    }

    return false;
  },

  enter () {
    const map = $(this.form).vulcanval('getMap');

    data.
      register(map).
      then(() => {
        this.setState({ error: false });
        window.location.href = '/login';
      }).
      catch(({ response }) => {
        const msg = response.data && response.data.msg ?
          response.data.msg :
          'Unknown error.';
        this.setState({ error: msg });
      });
  }
});

export default App;
