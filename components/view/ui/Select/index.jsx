import classNames from 'classnames';
import Select from 'react-select';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './select.module.scss';

export default function SelectComponent({
  value,
  options,
  onChange,
  placeholder,
}) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: '#ebf1f6',
      '&:hover': '',
      cursor: 'pointer',
      borderRadius: 8,
      height: 44,
    }),
    menuList: (provided) => ({
      ...provided,
      paddingBottom: 0,
      paddingTop: 0,
    }),
    option: (provided, state) => {
      return {
        ...provided,
        marginBottom: 0,
        marginTop: 0,
        backgroundColor: state.isSelected ? '#0fc7c7' : 'transparent',
        '&:hover': {
          backgroundColor: '#0fc7c7',
          color: '#fff',
        },
      };
    },
    menu: (provided) => ({
      ...provided,
      marginBottom: 0,
      borderRadius: 8,
      marginTop: 0,
      overflow: 'hidden',
    }),
  };

  return (
    <div className={styles.selectComponent}>
      <Select
        instanceId="id"
        classNamePrefix="test"
        styles={customStyles}
        placeholder={placeholder}
        onChange={onChange}
        className="select"
        options={options}
        value={value}
      />
    </div>
  );
}

// Type of props

SelectComponent.propTypes = {
  placeholder: types.string,
  value: types.object,
  options: types.array,
  onChange: types.func,
};