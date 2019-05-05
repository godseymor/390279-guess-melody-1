import React from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  const {time, errorCount} = props;

  return (
    <WelcomeScreen
      time={time}
      errorCount={errorCount}
    />
  );
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};
