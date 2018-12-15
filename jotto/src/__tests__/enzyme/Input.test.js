import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'

import { findByTestAttr } from '../../enzymeTestUtils'
import { Input } from '../../components/Input'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component prop specific to setup.
 * @returns {ShallowWrapper}
 */
function setup(props = {}) {
  return shallow(<Input {...props} />)
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box')
      expect(component.length).toBe(1)
    })
    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button')
      expect(component.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    test('renders component without error', () => {})
    test('does not renders input box', () => {})
    test('does not renders submit button', () => {})
  })
})

describe('update state', () => {})
