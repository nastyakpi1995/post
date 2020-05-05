import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, text, handleClick }) => {
  return (
    <button className={className} id={id} type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
