import React from 'react'
import PropTypes from 'prop-types'

function GuessedWords({ guessedWords }) {
  const contents =
    guessedWords.length === 0 ? (
      <span data-testid="guess-instructions">Try to guess the secret word!</span>
    ) : null
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
