import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const errorCount = 3;
  ReactDOM.render(
      <App
        errorCount = {errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
