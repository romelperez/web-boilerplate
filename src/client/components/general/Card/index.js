import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * A normal container card. It creates an application separation.
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

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string
};

export default Card;
