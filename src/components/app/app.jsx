import React from "react";
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

