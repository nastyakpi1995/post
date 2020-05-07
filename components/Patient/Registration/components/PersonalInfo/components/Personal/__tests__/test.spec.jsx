import React from 'react';
import renderer from 'react-test-renderer';
import Personal from '../index';

it('renders correctly', () => {
  const component = renderer.create(<Personal />).toJSON();
  expect(component).toMatchSnapshot();
});
