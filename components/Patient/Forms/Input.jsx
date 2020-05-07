import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, id, className }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
