import { Component } from 'react'

class Input extends Component {
	state = { value: '' }

	handleChange = (value) => {
		this.setState({ value: value })
	}
	render() {
		return (
			<input
				value={this.state.value}
				onChange={e => this.handleChange(e.target.value)}
			/>
		)
	}
}

class App extends Component {
	render() {
		return (
			<p>
				Full name:
				<Input />
				<Input />
			</p>
		)
	}
}

export default App
