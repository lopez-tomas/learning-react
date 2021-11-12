import { useState } from 'react'

// Hooks' rules:
// 1) They can't be called on conditions nor loops. Always at the higher level of the component.
// 2) They are only call on 2 sides:
// 2-a) React components
// 2-b) Custom hooks
// 3) When we create a Custom Hook, it must always start with use*(* being hook name)
const App = () => {
	const [counter, set_counter] = useState(0)
	return (
		<div>
			Counter: {counter}
			<button onClick={() => set_counter(counter + 1)}>Increment</button>
		</div>
	)
}

export default App
