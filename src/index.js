import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import settings from './mocks/settings.js';

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          errorCount = {settings.errorCount}
          questions = {questions}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
