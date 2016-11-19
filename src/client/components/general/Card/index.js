import React from 'react';
import { Row } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * A normal container card.
 */
const Card = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('general-card', className);

  return (
    <section {...rest} className={cls}>
      <Row isColumn>
        {children}
      </Row>
    </section>
  );
};

export default Card;
