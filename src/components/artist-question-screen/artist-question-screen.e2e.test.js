import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {artistQuestion} from '../../utils/tests-data.js';
import ArtistQuestionScreen from './artist-question-screen.jsx';

configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};


it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `John Snow`,
    picture: `pic-one`,
  };

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={artistQuestion}
  />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(artistQuestion);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
