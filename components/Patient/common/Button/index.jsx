import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', id, className, text, onHandleClick }) => (
  <button type={type} className={className} id={id} onClick={onHandleClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onHandleClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
