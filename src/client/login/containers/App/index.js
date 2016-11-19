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
    $(this.form).vulcanval(validators.login);
  },

  render () {

    const title = i18n.t('login.title');

    const error = this.state.error;
    let errorEl;
    if (error) {
      errorEl = (
        <Callout ref={(r => (this.errorEl = r))} color='alert'>{error}</Callout>
      );
    }

    return (
      <Container className='login'>
        <Header>
          {title}
        </Header>
        <Content>
          <Row className='login-content' isColumn={true}>
            <Card>
              {errorEl}
              <form ref={r => (this.form = r)} onSubmit={this.onSubmit}>
                <Row isColumn={true}>
                  <label htmlFor='login-email'>Email</label>
                  <input id='login-email' name='email' type='email' data-vv-display='#login-email-msg' />
                  <div id='login-email-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <label htmlFor='login-pwd'>Name</label>
                  <input id='login-pwd' name='pwd' type='password' data-vv-display='#login-pwd-msg' />
                  <div id='login-pwd-msg'></div>
                </Row>
                <Row isColumn={true}>
                  <input className='button' type='submit' value='Enter' />
                </Row>
                <Row isColumn={true}>
                  <p>No account? <a href='/register'>Register</a>.</p>
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
      login(map).
      then(() => {
        this.setState({ error: false });
        window.location.href = '/app';
      }).
      catch(({ response }) => {
        const msg = response.data && response.data.msg ? response.data.msg : 'Unknown error.';
        this.setState({ error: msg });
      });
  }
});

export default App;
