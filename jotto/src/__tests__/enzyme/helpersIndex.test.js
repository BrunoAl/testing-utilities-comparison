import { getLetterMatchCount } from '../../helpers/index'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'
  test('return correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })

  test('return the correct counter where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })

  test('returns correct counter when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})
