import {extend} from './utils';
import questions from './mocks/questions.js';


const initialState = {
  step: -1,
  mistakes: 0,
  questionId: 0,
  questions,
  errorsCount: 3
};

const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload
      });
  }

  return state;
};

export {reducer, ActionType};
