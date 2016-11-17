import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

const Loading = function (props) {

  const { className, children, ...other } = props;
  const cls = mergeClasses('main-loading', className);

  return (
    <div {...other} className={cls}>
      <div className='row align-center'>
        <div className='column small-12'>
          <div className='main-loading__circle'></div>
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
