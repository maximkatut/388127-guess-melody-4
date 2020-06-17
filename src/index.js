import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import settings from './mocks/settings.js';

const init = () => {
  ReactDOM.render(
      <App
        errorCount = {settings.errorCount}
        questions = {questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
