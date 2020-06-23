import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {artistQuestion} from '../../utils/tests-data.js';

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={artistQuestion}
        onAnswer={() => {}}
        renderPlayer={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
