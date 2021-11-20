import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const initialState = {
	entities: [],
	filter: 'all', // completed || uncompleted
}
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'to-do/add': {
			return {
				...state,
				entities: state.entities.concat({ ...action.payload })
			}
		}
		case 'to-do/completed': {
			const new_to_dos = state.entities.map(to_do => {
				if (to_do.id === action.payload.id) {
					return { ...to_do, completed: true }
				}

				return to_do
			})
			return {
				...state,
				entities: new_to_dos
			}
		}
		case 'filter/set': {
			return {
				...state,
				filter: action.payload,
			}
		}
		default:
			return state;
	}
}

const selectToDos = state => {
	const { entities, filter } = state

	if (filter === 'completed') {
		return entities.filter(to_do => to_do.completed)
	}

	if (filter === 'uncompleted') {
		return entities.filter(to_do => !to_do.completed)
	}

	return entities
}

const ToDoItem = ({ to_do }) => {
	const dispatch = useDispatch()

	return (
		<li
			style={{ textDecoration: to_do.completed ? 'line-through' : 'none' }}
			onClick={() => dispatch({ type: 'to-do/completed', payload: to_do })}
		>{to_do.title}</li>
	)
}

const App = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const to_dos = useSelector(selectToDos)

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
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}>Show TO-DOs</button>
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'completed' })}>Completed</button>
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'uncompleted' })}>Uncompleted</button>
			<ul>
				{to_dos.map(to_do => <ToDoItem key={to_do.id} to_do={to_do} />)}
			</ul>
		</div>
	)
}

export default App
