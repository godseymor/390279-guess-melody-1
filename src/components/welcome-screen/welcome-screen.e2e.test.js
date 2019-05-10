import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`<WelcomeScreen />`, () => {
  const handleClick = jest.fn();

  it(`simulate click on start button`, () => {
    const container = shallow(<WelcomeScreen
      time={5}
      errorCount={3}
      onButtonClick={handleClick}/>
    );

    const startButton = container.find(`button`);

    startButton.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
