import React from 'react'
import App from '../../App'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props spacific to this setup.
 * @param {object} state - Initial state for setup
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

it('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

it('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

it('renders counter display', () => {
  const wrapper = setup()
  const countDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(countDisplay.length).toBe(1)
})

it('counter start at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

it('clicking button increments counter display', () => {
  const counter = 7
  const wrapper = setup(null, { counter })

  const button = findByTestAttr(wrapper, 'increment-button')
  button.simulate('click')
  wrapper.update()

  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.text()).toContain(counter + 1)
})
