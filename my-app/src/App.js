import Button from "./Button"

const App = () => {
	const my_variable = true
	  
	if (my_variable) {
		return <p>My variable gave true!</p>
	}
	return (
		<div>
			<h1 onClick={(e) => console.log('click', e)}>Hello, world</h1>
			<Button onClick={() => console.log('clicked')}>
				Send
			</Button>
		</div>
	)
}

export default App
