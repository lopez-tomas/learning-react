import { createContext, useContext, useState } from 'react'

const Context = createContext({ value: false, toggle: () => {} })

const Provider = ({ children }) => {
	const [value, setValue] = useState(false)
	const val = {
		value,
		toggle: () => setValue(!value),
	}

	return (
		<Context.Provider value={val}>
			{children}
		</Context.Provider>
	)
}

const Component = () => {
	const { value, toggle } = useContext(Context)

	return (
		<div>
			<label>{value.toString()}</label>
			<button onClick={toggle}>Toggle</button>
		</div>
	)
}

const App = () => {
	return (
		<Provider>
			<Component />
		</Provider>
	)
}

export default App
