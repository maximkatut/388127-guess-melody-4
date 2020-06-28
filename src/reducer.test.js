import questionsMocks from './mocks/questions';
import {ActionCreator, ActionType, reducer} from "./reducer.js";
import {questions} from './utils/tests-data';

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      step: -1,
      mistakes: 0,
      questionId: 0,
      questions: questionsMocks,
      errorsCount: 3
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      questionId: 0,
      questions,
      errorsCount: 3
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1
    })).toEqual({
      step: 0,
      mistakes: 0,
      questionId: 0,
      questions,
      errorsCount: 3
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
      questionId: 0,
      questions,
      errorsCount: 3
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 3
    })).toEqual({
      step: 2,
      mistakes: 0,
      questionId: 0,
      questions,
      errorsCount: 3
    });
  });

  it(`Reducer should increment current mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      questionId: 0,
      questions,
      errorsCount: 3
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 2
    })).toEqual({
      step: -1,
      mistakes: 2,
      questionId: 0,
      questions,
      errorsCount: 3
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1
    });
  });
});
