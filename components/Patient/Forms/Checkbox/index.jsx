import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styles from './style.module.scss';

const Checkbox = ({ id }) => {
  return (
    <Formik onSubmit={() => {}}>
      <Form>
        <Field type="checkbox" id={id} className={styles.checkbox} />
      </Form>
    </Formik>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
};

export default Checkbox;
