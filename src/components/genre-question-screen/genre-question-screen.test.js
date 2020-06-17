import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';
import {genreQuestion} from '../../utils/tests-data.js';

describe(`GenreQuestionScreen`, () => {
  it(`GenreQuestionScreen should be rendered right`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        question={genreQuestion}
        onAnswer={() => {}}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
