import { Component } from 'react'

class Input extends Component {
	render() {
		return (
			<input
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		)
	}
}

class App extends Component {
	state = {
		first_name: '',
		last_name: '',
	}

	constructor(props) {
		super(props)
		this.updateFirstName = this.updateFirstName.bind(this)
	}
	// Third fix: Use this with

	//updateFirstName(value) {
		//this.updateValues('first_name', value.target.value)
	//}

	updateFirstName = (value) => {
		this.updateValues('first_name', value.target.value)
	}

	updateValues(prop, value) {
		this.setState({ [prop]: value })
	}
	//updateValues = (prop, value) => { First fix: Using properties with functions
		//this.setState({ [prop]: value })
	//}

	render() {
		return (
			<p>
				Full name: {`${this.state.first_name} ${this.state.last_name}`}
				<Input 
					value={this.state.first_name}
					onChange={this.updateFirstName} // Third fix
					//onChange={(arg) => this.updateFirstName(arg)} // Second fix: When we are using methods instead of properties.
					//onChange={e => this.updateValues('first_name', e.target.value)} // First fix
				/>
				<Input 
					value={this.state.last_name}
					onChange={e => this.updateValues('last_name', e.target.value)}
				/>
			</p>
		)
	}
}

export default App
