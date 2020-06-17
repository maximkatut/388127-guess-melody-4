import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from './genre-question-screen.jsx';
import {genreQuestion} from '../../utils/tests-data.js';

configure({
  adapter: new Adapter(),
});

describe(`GenreQuestionScreen e2e`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const onAnswer = jest.fn();
    const genreQuestionScreen = shallow(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={genreQuestion}
    />);

    const form = genreQuestionScreen.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const genreQuestionScreen = shallow(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={genreQuestion}
    />);

    const form = genreQuestionScreen.find(`form`);
    const inputTwo = genreQuestionScreen.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(genreQuestion);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genreQuestionScreen.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer);
  });
});
