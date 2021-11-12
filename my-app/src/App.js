import { Component } from 'react'

class App extends Component { // we must extend 'Component' to use 'setState'
	state = { // it must ALWAYS be called 'state'
		value: 3
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<p>Hello, World!</p>
				<button 
					className={`${this.state.value}`} 
					onClick={() => this.setState({  value: 2 })} // refresh 'state'
				>
					Send
				</button>
			</div>
		)
	}
}

export default App
