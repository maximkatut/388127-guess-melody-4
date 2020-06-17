import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {questions} from '../../utils/tests-data.js';

describe(`App`, () => {
  it(`App should be rendered`, () => {
    const tree = renderer
      .create(<App
        errorCount={3}
        questions={questions}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
