import React from 'react';
import renderer from 'react-test-renderer';
import PersonalInfo from '../index';

it('renders correctly', () => {
  const component = renderer.create(<PersonalInfo />).toJSON();
  expect(component).toMatchSnapshot();
});
