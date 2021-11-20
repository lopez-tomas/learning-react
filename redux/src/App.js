import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const initialState = {
	entities: [],
}
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'to-do/add': {
			return {
				...state,
				entities: state.entities.concat({ ...action.payload })
			}
		}
	}
	return state;
}

const ToDoItem = ({ to_do }) => {
	return (
		<li>{to_do.title}</li>
	)
}

const App = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const state = useSelector(x => x)

	const submit = e => {
		e.preventDefault()
		if (!value.trim()) {
			return
		}
		const id = Math.random().toString(36)
		const to_do = { title: value, completed: false, id }
		dispatch({ type: 'to-do/add', payload: to_do })
		setValue('')
	}

	return (
		<div>
			<form onSubmit={submit}>
				<input value={value} onChange={e => setValue(e.target.value)}/>
			</form>
			<button>Show TO-DOs</button>
			<button>Completed</button>
			<button>Uncompleted</button>
			<ul>
				{state.entities.map(to_do => <ToDoItem key={to_do.id} to_do={to_do} />)}
			</ul>
		</div>
	)
}

export default App
