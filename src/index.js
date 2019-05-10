import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const startButtonClickHandler = () => null;
  const settings = {
    time: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        time={settings.time}
        errorCount={settings.errorCount}
        onButtonClick={startButtonClickHandler}
      />,
      document.querySelector(`.main`)
  );
};

init();
