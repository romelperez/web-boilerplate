import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * Loading animation element. Don't receive children.
 */
const Loading = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('main-loading', className);

  return (
    <div {...rest} className={cls}>
      <Row className='align-center'>
        <Column small={12}>
          <div className='main-loading__circle'></div>
        </Column>
      </Row>
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;
