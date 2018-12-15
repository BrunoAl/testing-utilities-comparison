import React from 'react'
import PropTypes from 'prop-types'

function GuessedWords({ guessedWords }) {
  const contents =
    guessedWords.length === 0 ? (
      <span data-testid="guess-instructions">Try to guess the secret word!</span>
    ) : (
      <div data-testid="guessed-words">
        <h3>GuessedWords</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, index) => (
              <tr data-testid="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  return <div data-testid="component-guessed-words">{contents}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
