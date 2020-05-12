import React from 'react';
import cn from 'classnames';
import types from 'prop-types';

import style from './style.module.scss';

export default function FieldLabel(props) {
  const { className = '', text = '', children = null, ...rest } = props;

  return (
    <label className={cn(style.fieldLabel, className)} {...rest}>
      {text}
      {children}
    </label>
  );
}

FieldLabel.propTypes = {
  text: types.string,
  className: types.string,
  children: types.any,
};

FieldLabel.defaultProps = {
  className: '',
  text: '',
  children: null,
};
