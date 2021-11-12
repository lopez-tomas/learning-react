import Button from "./Button"

const arr = [
	'happy pig',
	'sad pig',
	'excited pig',
]

const App = () => {
	const my_variable = false
	  
	if (my_variable) {
		return <p>My variable gave true!</p>
	}
	return (
		<div>
			<h1 onClick={(e) => console.log('click', e)}>Hello, world</h1>
			{arr.map(el => <p key={el}>{el}</p>)}
			<Button onClick={() => console.log('clicked')}>
				Send
			</Button>
		</div>
	)
}

export default App
