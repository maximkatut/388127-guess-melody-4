import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`App should be rendered`, () => {
    const tree = renderer
      .create(<App
        errorCount={3}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
