import { Component, useState, useEffect } from 'react'

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

//const Interval = ({ counter }) => {
	//useEffect(() => {
		//const i = setInterval(() => console.log(counter), 1000)
		//return () => clearInterval(i) 
	//}, [counter])

	//return (
		//<p>Interval</p>
	//)
//}

class Interval extends Component {
	interval = ''
	componentDidMount() {
		this.interval = setInterval(() => console.log(this.props.counter), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return (
			<p>Interval</p>
		)
	}
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
			<Interval counter={counter}/>
		</div>
	)
}

export default App
