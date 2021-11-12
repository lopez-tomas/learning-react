import { Component } from 'react'

class Button extends Component {
	state = {}
	constructor(props) {
		super(props)
		console.log('constructor', props);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		console.log('running render method of button');
		return (
			<button>
				Send	
			</button>
		)
	}
}

class App extends Component { // we must extend 'Component' to use 'setState'
	state = { // it must ALWAYS be called 'state'
		value: 3
	}
	render() {
		console.log(this.state);
		return (
			<div>
				<p>Hello, World!</p>
				<Button piggy="happy"/>
				<button 
					className={`${this.state.value}`} 
					onClick={() => this.setState({  value: 2 })} // refresh 'state'
				>
					Send on App
				</button>
			</div>
		)
	}
}

export default App
