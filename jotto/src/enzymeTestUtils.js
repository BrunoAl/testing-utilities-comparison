import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from './reducers'

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => createStore(rootReducer, initialState)

/**
 * Return node(s) with the given data-testid attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-testid attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-testid="${val}"]`)

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}
