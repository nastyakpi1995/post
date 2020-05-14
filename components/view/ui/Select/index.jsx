import React from 'react';
import Select from 'react-select';
import types from 'prop-types';

// Style

import styles from './style.module.scss';

export default function SelectComponent({
  value,
  options,
  onChange,
  placeholder,
  onFocus,
  ...rest
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
        onFocus={onFocus}
        className="select"
        options={options}
        value={value}
        {...rest}
      />
    </div>
  );
}

// Type of props

SelectComponent.propTypes = {
  placeholder: types.string,
  value: types.oneOfType([types.string, types.object]),
  options: types.array,
  onChange: types.func,
  onFocus: types.func,
};
