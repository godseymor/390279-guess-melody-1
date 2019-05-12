import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';

it(`rednders correctly`, () => {
  const onButtonClick = () => null;
  const tree = renderer
    .create(<WelcomeScreen time={5} errorCount={3} onButtonClick={onButtonClick} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
