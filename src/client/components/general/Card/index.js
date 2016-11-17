import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * A normal container card.
 */
const Card = function (props) {

  const { className, children, ...other } = props;
  const cls = mergeClasses('general-card', className);

  return (
    <section {...other} className={cls}>
      <div className='row'>
        <div className='column small-12'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Card;
