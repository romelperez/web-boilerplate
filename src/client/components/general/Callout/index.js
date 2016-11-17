import React, { PropTypes } from 'react';
import mergeClasses from 'client/tools/mergeClasses';

/**
 * A callout message container.
 */
const Callout = function (props) {

  const { type, onClose, className, children, ...other } = props;
  const cls = mergeClasses('general-callout callout', type, className);

  return (
    <div {...other} className={cls} data-closable>
      {children}
      <button className='close-button' aria-label='Dismiss alert' type='button'
        data-close onClick={onClose}>
        <span aria-hidden='true' dangerouslySetInnerHTML={{__html: '&times;'}} />
      </button>
    </div>
  );
};

Callout.defaultProps = {
  type: 'alert',
};

Callout.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'alert', 'success', 'warning']),
  onClose: PropTypes.func,
};

export default Callout;
