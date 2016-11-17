import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main header.
 */
const Header = function (props) {

  const { className, children, ...other } = props;
  const cls = mergeClasses('main-header', className);

  return (
    <header {...other} className={cls}>
      <div className='row'>
        <div className='column small-12'>
          <h1>
            <a href='/' className='main-header__title'>
              {children}
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {

  /**
   * Header can optionally have an element content.
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};

export default Header;
