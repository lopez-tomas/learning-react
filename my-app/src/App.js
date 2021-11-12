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

	updateValues = (prop, value) => {
		this.setState({ [prop]: value })
	}

	render() {
		return (
			<p>
				Full name: {`${this.state.first_name} ${this.state.last_name}`}
				<Input 
					value={this.state.first_name}
					onChange={e => this.updateValues('first_name', e.target.value)}
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
