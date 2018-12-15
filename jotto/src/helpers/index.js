/**
 * @method getLetterMatchCount
 * @param {String} guessedWord - Guessed word.
 * @param {*} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secretWord
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(guessedWord.split(''))
  const guessedLetterSet = new Set(secretWord.split(''))
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}
