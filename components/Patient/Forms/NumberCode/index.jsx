import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styles from './style.module.scss';

const NumberCod = ({ id }) => {
  const [count, setCount] = useState('+333');

  const handleInput = (event) => {
    const { value } = event.target;
    setCount(value);
  };

  return (
    <Formik onSubmit={() => {}}>
      <Form>
        <Field
          as="select"
          className={styles['validation-number__code']}
          id={id}
          onChange={handleInput}
        >
          <option value="+111">+380</option>
          <option value="+222">{count}</option>
        </Field>
      </Form>
    </Formik>
  );
};

NumberCod.propTypes = {
  id: PropTypes.string,
};

export default NumberCod;
