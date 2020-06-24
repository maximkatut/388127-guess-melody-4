import GameScreen from './game-screen.jsx';
import {GameType} from "../../const.js";
import React from 'react';
import renderer from 'react-test-renderer';

const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`GameScreen should be rendered right with type artist`, () => {
    const tree = renderer.create((
      <GameScreen
        type={GameType.ARTIST}
      >
        {children}
      </GameScreen>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`GameScreen should be rendered right with type genre`, () => {
    const tree = renderer.create((
      <GameScreen
        type={GameType.GENRE}
      >
        {children}
      </GameScreen>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
