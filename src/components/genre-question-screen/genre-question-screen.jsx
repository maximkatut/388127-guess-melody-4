import {GameType} from '../../const.js';
import PropTypes from 'prop-types';
import React from 'react';
class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: [false, false, false, false]
    };
  }

  _handleInputChange(value, index) {
    const {answers: userAnswers} = this.state;
    this.setState({
      answers: [...userAnswers.slice(0, index), value, ...userAnswers.slice(index + 1)]
    });
  }

  render() {
    const {onAnswer, question, renderPlayer} = this.props;
    const {answers, genre} = question;
    const {answers: userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit = {(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >
          {answers.map((answer, i) => (
            <div key={`${i}-${answer.src}`} className="track">
              {renderPlayer(answer.src, i)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt)=> {
                    const value = evt.target.checked;
                    this._handleInputChange(value, i);
                  }}
                />
                <label
                  className="game__check"
                  htmlFor={`answer-${i}`}
                >
                    Отметить
                </label>
              </div>
            </div>
          ))}
          <button className="game__submit button" type="submit">
              Ответить
          </button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
