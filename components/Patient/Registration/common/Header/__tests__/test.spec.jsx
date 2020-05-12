import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

it('renders correctly', () => {
  const component = renderer.create(<Header />).toJSON();
  expect(component).toMatchSnapshot();
});
