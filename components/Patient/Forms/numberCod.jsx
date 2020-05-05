import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberCod = ({ id, className }) => {
  const [count, setCount] = useState();

  const handleInput = (event) => {
    const { value } = event.target;
    setCount(value);
    return value;
  };

  return (
    <select className={className} id={id} onChange={handleInput}>
      <option value="+111">+380</option>
      <option value="+222">{count || 'test'}</option>
    </select>
  );
};

NumberCod.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};

export default NumberCod;
