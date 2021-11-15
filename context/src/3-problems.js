import { createContext, useContext, useState, memo, useCallback } from 'react'

const Context = createContext()

const CounterProvider = ({ children }) => {
	const [counter, setCount] = useState(0)

	const increment = useCallback(() => setCount(x => x + 1), [])
	const decrement = useCallback(() => setCount(x => x - 1), [])

	return (
		<Context.Provider value={{counter, increment, decrement}}>
			{children}
		</Context.Provider>
	)
}

const Increment = memo(() => {
	console.log('increment')
	const { increment } = useContext(Context)
	return (
		<button onClick={increment}>Increment</button>
	)
})

const Decrement = memo(() => {
	console.log('decrement')
	const { decrement } = useContext(Context)
	return (
		<button onClick={decrement}>Decrement</button>
	)
})

const Label = () => {
	console.log('Label')
	const { counter } = useContext(Context)
	return (
		<h1>{counter}</h1>
	)
}

const App = () => {
	return (
		<CounterProvider>
			<Label />
			<Increment />
			<Decrement />
		</CounterProvider>
	)
}

export default App
