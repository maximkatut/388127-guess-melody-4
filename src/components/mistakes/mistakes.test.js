import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

describe(`Mistakes`, () => {
  it(`Mistakes component should render corerctly`, () => {
    const tree = renderer.create((
      <Mistakes
        count={3}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
