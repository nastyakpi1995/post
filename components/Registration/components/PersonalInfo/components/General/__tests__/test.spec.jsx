import React from 'react';
import renderer from 'react-test-renderer';
import General from '../index';

it('renders correctly', () => {
  const component = renderer.create(<General />).toJSON();
  expect(component).toMatchSnapshot();
});
