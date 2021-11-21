import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchThunk, setComplete, setFilter } from './features/todos'

const selectToDos = state => {
	const { to_dos: { entities }, filter } = state

	if (filter === 'completed') {
		return entities.filter(to_do => to_do.completed)
	}

	if (filter === 'uncompleted') {
		return entities.filter(to_do => !to_do.completed)
	}

	return entities
}

const selectStatus = state => state.to_dos.status

const ToDoItem = ({ to_do }) => {
	const dispatch = useDispatch()

	return (
		<li
			style={{ textDecoration: to_do.completed ? 'line-through' : 'none' }}
			onClick={() => dispatch(setComplete(to_do))}
		>{to_do.title}</li>
	)
}

const App = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const to_dos = useSelector(selectToDos)
	const status = useSelector(selectStatus)

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

	if (status.loading === 'pending') {
		return <p>Loading...</p>
	}

	if (status.loading === 'rejected') {
		return <p>{status.error}</p>
	}

	return (
		<div>
			<form onSubmit={submit}>
				<input value={value} onChange={e => setValue(e.target.value)}/>
			</form>
			<button onClick={() => dispatch(setFilter('all'))}>Show TO-DOs</button>
			<button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
			<button onClick={() => dispatch(setFilter('uncompleted'))}>Uncompleted</button>
			<button onClick={() => dispatch(fetchThunk())}>Fetch</button>
			<ul>
				{to_dos.map(to_do => <ToDoItem key={to_do.id} to_do={to_do} />)}
			</ul>
		</div>
	)
}

export default App
