import React from 'react';
import renderer from 'react-test-renderer';
import Confirmation from '../index';

it('renders correctly', () => {
  const component = renderer.create(<Confirmation />).toJSON();
  expect(component).toMatchSnapshot();
});
