import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main footer. Don't receive children.
 */
const Footer = function (props) {

  const { className, ...other } = props;
  const cls = mergeClasses('main-footer', className);
  const text = 'Footer';

  return (
    <footer {...other} className={cls}>
      <div className='row'>
        <div className='column small-12'>
          {text}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
