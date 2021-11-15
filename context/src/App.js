import { createContext, Component, useContext } from 'react'

const Context1 = createContext('my first context')
const Context2 = createContext('my second context')

const Provider = ({ children }) => {
	return (
		<Context1.Provider value="value 1">
			<Context2.Provider value="value 2">
				{children}
			</Context2.Provider>
		</Context1.Provider>
	)
}

class TestComponent extends Component {
	render() {
		return (
			<Context1.Consumer>
				{
					value1 =>
						<Context2.Consumer>
							{value2 => <div>{`${value1} ${value2}`}</div>}
						</Context2.Consumer>
				}
			</Context1.Consumer>
		)
	}
}

const Component2 = () => {
	const value1 = useContext(Context1)
	const value2 = useContext(Context2)

	return (
		<div>{`${value1} ${value2}`}</div>
	)
}

const App = () => {
	return (
		<Provider>
			<span>Class Component</span><TestComponent />
			<br />
			<span>Functional Component</span><Component2 />
		</Provider>
	)
}

export default App

