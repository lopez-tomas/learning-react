import { useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { useState } from 'react'

export const asyncMiddleware = store => next => action => {
	if (typeof action === 'function') {
		return action(store.dispatch, store.getState)
	}
	return next(action)
}

export const fetchThunk = () => async dispatch => {
	dispatch({ type: 'to-dos/pending' })
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
		const data = await response.json()
		const to_dos = data.slice(0, 10)
		dispatch({ type: 'to-dos/fulfilled', payload: to_dos })
	} catch(e) {
		dispatch({ type: 'to-dos/error', error: e.message })
	}
}

export const toDosReducer = (state = [], action) => {
	switch(action.type) {
		case 'to-do/add': {
			return state.concat({ ...action.payload })
		}
		case 'to-do/completed': {
			const new_to_dos = state.map(to_do => {
				if (to_do.id === action.payload.id) {
					return { ...to_do, completed: true }
				}

				return to_do
			})
			return new_to_dos
		}
		case 'to-dos/fulfilled': {
			return action.payload
		}
		default:
			return state
	}
}

export const filterReducer = (state = 'all', action) => {
	switch(action.type) {
		case 'filter/set':
			return action.payload
		default:
			return state
	}
}

const initialFetching = { loading: 'idle', error: null }
export const fetchingReducer = (state = initialFetching, action) => {
	switch(action.type) {
		case 'to-dos/pending': {
			return { ...state, loading: 'pending' }
		}
		case 'to-dos/fulfilled': {
			return { ...state, loading: 'succeeded' }
		}
		case 'to-dos/error': {
			return { error: action.error, loading: 'rejected' }
		}
		default:
			return state
	}
}

export const reducer = combineReducers({
	to_dos: combineReducers({
		entities: toDosReducer,
		status: fetchingReducer,
	}),
	filter: filterReducer,
})

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
			onClick={() => dispatch({ type: 'to-do/completed', payload: to_do })}
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
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'all' })}>Show TO-DOs</button>
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'completed' })}>Completed</button>
			<button onClick={() => dispatch({ type: 'filter/set', payload: 'uncompleted' })}>Uncompleted</button>
			<button onClick={() => dispatch(fetchThunk())}>Fetch</button>
			<ul>
				{to_dos.map(to_do => <ToDoItem key={to_do.id} to_do={to_do} />)}
			</ul>
		</div>
	)
}

export default App
