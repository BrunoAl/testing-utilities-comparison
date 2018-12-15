import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Input extends PureComponent {
  render() {
    const { success } = this.props
    const contents = success ? null : (
      <form className="form-inline">
        <input
          data-testid="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-testid="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    )
    return <div data-testid="component-input">{contents}</div>
  }
}

const mapStateToProps = ({ success }) => ({ success })

export default connect(mapStateToProps)(Input)
