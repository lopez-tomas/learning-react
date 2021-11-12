import Button from "./Button"

const App = () => {
	return (
		<div>
			<h1>Hello, world</h1>
			<Button onClick={() => console.log('clicked')}>
				Send
			</Button>
		</div>
	)
}

export default App
