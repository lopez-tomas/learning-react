import { useState } from 'react'

// Hooks' rules:
// 1) They can't be called on conditions nor loops. Always at the higher level of the component.
// 2) They are only call on 2 sides:
// 2-a) React components
// 2-b) Custom hooks
// 3) When we create a Custom Hook, it must always start with use*(* being hook name)


//class App extends Component {
	//state = { counter: 0 }
	//increment = () => {
		//this.setState({ counter: this.state.counter + 1 })
	//}
	//render() {
		//return (
			//<div>
				//Counter: {this.state.counter}
				//<button onClick={this.increment}>Increment</button>
			//</div>
		//)
	//}
//}

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
	return (
		<div>
			Counter: {counter}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default App
