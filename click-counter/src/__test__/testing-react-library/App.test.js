import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'
import { render, fireEvent, cleanup } from 'react-testing-library'

afterEach(cleanup)

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders increment button', () => {
  const { getByText } = render(<App />)
  getByText(/increment button/i)
})

test('renders counter display', () => {
  const { getByText } = render(<App />)
  getByText(/the counter is/i, { exact: false })
})

test('counter start at 0', () => {
  const { getByText } = render(<App />)
  expect(getByText(/the counter is/i).textContent).toContain(0)
})

test('clicking button increments counter display to 2', () => {
  const { getByText } = render(<App />)
  const button = getByText(/increment button/i)
  fireEvent.click(button)
  fireEvent.click(button)

  expect(getByText(/the counter is/i).textContent).toContain(2)
})

test('clicking button increments counter display to 5', () => {
  const { getByText } = render(<App />)
  const button = getByText(/increment button/i)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)

  expect(getByText(/the counter is/i).textContent).toContain(5)
})

test('render decrement button', () => {
  const { getByText } = render(<App />)
  getByText(/decrement button/i)
})

test('clicking button decrement counter display from 5 to 2', () => {
  const { getByText } = render(<App />)
  const incrementButton = getByText(/increment button/i)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)

  const decrementButton = getByText(/decrement button/i)
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)

  expect(getByText(/the counter is/i).textContent).toContain(2)
  
})

test("don't decrement the counter bellow 0", () => {
  const { getByText } = render(<App />)
  const decrementButton = getByText(/decrement button/i)
  
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)
  fireEvent.click(decrementButton)

  expect(getByText(/the counter is/i).textContent).toContain(0)
})

// test('display error when trying to drecrement bellow 0', () => {
//   const { getByText } = render(<App />)
// })
