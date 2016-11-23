import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * User information element.
 */
const User = function (props) {

  const { _id, name, email, img, className, children, ...rest } = props;
  const cls = mergeClasses('users-user', className);

  return (
    <article {...rest} className={cls} data-id={_id}>
      <Row>
        <Column small={3} className='users-user__c1'>
          <img src={img} />
        </Column>
        <Column small={9} className='users-user__c2'>
          <h1>{name}</h1>
          <p><small>{email}</small></p>
        </Column>
      </Row>
    </article>
  );
};

User.propTypes = {

  /**
   * Unique identifier.
   */
  _id: PropTypes.string,

  /**
   * Full name.
   */
  name: PropTypes.string.isRequired,

  /**
   * Email.
   */
  email: PropTypes.string,

  /**
   * Profile picture absolute URL.
   */
  img: PropTypes.string,
};

User.defaultProps = {
  _id: null,
  name: '',
  email: '',
  img: '',
};

export default User;
