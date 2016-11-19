import React from 'react';
import { Row } from 'react-foundation';
import data from 'client/data';
import Card from 'client/components/general/Card';
import User from 'client/components/users/User';

const Users = React.createClass({

  getInitialState () {
    return {
      users: []
    };
  },

  componentDidMount () {
    data.getAllUsers().then(res => {
      const users = res.data;
      this.setState({ users });
    });
  },

  render () {

    const { users } = this.state;

    const usersEl = users.map(({ _id, name, email, img }) => {
      return (
        <Card key={_id}>
          <User _id={_id} name={name} email={email} img={img} />
        </Card>
      );
    });

    return (
      <Row isColumn className='app-users'>
        {usersEl}
      </Row>
    );
  },
});

export default Users;
