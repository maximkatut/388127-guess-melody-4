import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';
import {questions} from '../../utils/tests-data.js';

const mockStore = configureStore([]);

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              errorCount={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={-1}
            />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              errorCount={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const store = mockStore({
      mistakes: 3
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              errorCount={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
