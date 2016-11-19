import React from 'react';
import { Row } from 'react-foundation';
import mergeClasses from 'client/tools/mergeClasses';

const Loading = function (props) {

  const { className, children, ...rest } = props;
  const cls = mergeClasses('main-loading', className);

  return (
    <div {...rest} className={cls}>
      <Row isColumn className='align-center'>
        <div className='main-loading__circle'></div>
      </Row>
    </div>
  );
};

export default Loading;
