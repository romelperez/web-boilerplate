import React from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main container.
 */
const Container = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('main-container', className);

  return (
    <main {...rest} className={cls}>
      {children}
    </main>
  );
};

export default Container;
