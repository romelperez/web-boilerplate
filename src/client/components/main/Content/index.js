import React from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main content.
 */
const Content = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('main-content', className);

  return (
    <section {...rest} className={cls}>
      {children}
    </section>
  );
};

export default Content;
