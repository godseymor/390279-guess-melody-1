import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {time, errorCount, onButtonClick} = props;

  return (
    <WelcomeScreen
      time={time}
      errorCount={errorCount}
      onButtonClick={onButtonClick}
    />
  );
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default App;
