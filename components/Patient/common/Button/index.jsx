import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', className, text, onHandleClick }) => (
  <button type={type} className={className} onClick={onHandleClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onHandleClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
