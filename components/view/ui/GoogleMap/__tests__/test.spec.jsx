import React from 'react';
import renderer from 'react-test-renderer';
import GoogleMap from '../index';

it('renders correctly', () => {
  const component = renderer.create(<GoogleMap />).toJSON();
  expect(component).toMatchSnapshot();
});
