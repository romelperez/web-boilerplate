import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Main footer. Don't receive children.
 */
const Footer = function (props) {

  const { className, ...rest } = props;
  const cls = mergeClasses('main-footer', className);
  const text = 'Footer';

  return (
    <footer {...rest} className={cls}>
      <Row isColumn>
        {text}
      </Row>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
