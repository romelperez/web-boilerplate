import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main header.
 */
const Header = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('main-header', className);

  return (
    <header {...rest} className={cls}>
      <Row isColumn>
        <h1>
          <a href='/' className='main-header__title'>
            {children}
          </a>
        </h1>
      </Row>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string
};

export default Header;
