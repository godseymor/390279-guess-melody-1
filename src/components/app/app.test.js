import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const startButtonClickHandler = () => null;
  const tree = renderer
    .create(<App
      time={5}
      errorCount={3}
      onButtonClick={startButtonClickHandler} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
