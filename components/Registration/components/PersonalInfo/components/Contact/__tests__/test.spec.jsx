import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../index';

it('renders correctly', () => {
  const component = renderer.create(<Contact />).toJSON();
  expect(component).toMatchSnapshot();
});
