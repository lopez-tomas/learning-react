import { useDispatch, useSelector } from 'react-redux'
const initialState = {
	entities: [],
}
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'to-do/add': {
			console.log('reducer!')
			return {
				...state,
				entities: [{}]
			}
		}
	}
	return state;
}

const App = () => {
	const dispatch = useDispatch()
	const state = useSelector(x => x)
	console.log(state, 'rendering')

	return (
		<div>
			<form>
				<input />
			</form>
			<button onClick={() => dispatch({ type: 'to-do/add' })}>Show TO-DOs</button>
			<button>Completed</button>
			<button>Uncompleted</button>
			<ul>
				<li>TO-DO 1</li>
				<li>TO-DO 2</li>
			</ul>
		</div>
	)
}

export default App
