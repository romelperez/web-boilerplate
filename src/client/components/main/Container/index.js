import React, { PropTypes } from 'react';
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

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string
};

export default Container;
