import { useState, useEffect } from 'react'

const useCounter = (initial) => {
	const [counter, set_counter] = useState(initial)

	const increment = () => {
	  set_counter(counter + 1)
	}

	const decrement = () => {
		if (counter !== 0) {
	  	set_counter(counter - 1)
		}
	}

	return [counter, increment, decrement]
}

const App = () => {
	const [counter, increment, decrement] = useCounter(0)
	useEffect(() => {
		document.title = counter
	}, [counter])

	return (
		<div>
			Counter: {counter}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default App
