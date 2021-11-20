import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const reducer = (state = 0, action) => {
  console.log({ action, state })
  switch(action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'set':
      return action.payload
    default:
      return state
  }
}

const App = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const set = () => {
    dispatch({ type: 'set', payload: value})
    setValue('')
  }

  return (
    <div>
      <p>Counter: {state}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <br />

      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <br />

      <input value={value} onChange={e => setValue(Number(e.target.value))}/>
      <button onClick={set}>Set</button>
    </div>
  )
}

export default App
