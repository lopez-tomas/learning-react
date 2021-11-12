import { useReducer, useState } from 'react'

// const state = { counter: 0 }
// action = { type: string, payload: any }
const initial = { counter: 0 }

const reducer = (state, action) => {
	switch(action.type) {
		case 'increment':
			return { counter: state.counter + 1 }
		case 'decrement':
			if (state.counter !== 0) {
				return { counter: state.counter - 1 }
			}
			return state
		case 'set':
			return { counter: action.payload }
		default:
			return state
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initial)
	const [value, set_value] = useState(0)

	return (
		<div>
			Counter: {state.counter}
			<input value={value} onChange={e => set_value(Number(e.target.value))}/>
			<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'set', payload: value })}>Set</button>
		</div>
	)
}

export default App
