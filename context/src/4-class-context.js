import { Component, createContext } from 'react'

const Context = createContext('my value')

const Provider = ({ children }) => {
	return (
		<Context.Provider value="other value">
			{children}
		</Context.Provider>
	)
}

class TestComponent extends Component {
	//static contextType = Context

	render() {
		console.log(this.context)
		return (
			<div>Hello, World!</div>
		)
	}
}

TestComponent.contextType = Context // It's the same as line 14

const App = () => {
	return (
		<Provider>
			<TestComponent />		
			<Context.Consumer>
				{value => <div>{value}</div>}
			</Context.Consumer>
		</Provider>
	)
}

export default App
