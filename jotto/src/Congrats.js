import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` props is false)
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-testid="component-congrats">
        <span data-testid="congrats-message">Congratulations! You guessed the word!</span>
      </div>
    )
  }
  return <div data-testid="component-congrats" />
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}
export default Congrats
