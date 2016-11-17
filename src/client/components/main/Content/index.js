import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main content.
 */
const Content = function (props) {

  const { className, children, other } = props;
  const cls = mergeClasses('main-content', className);

  return (
    <section {...other} className={cls}>
      {children}
    </section>
  );
};

export default Content;
