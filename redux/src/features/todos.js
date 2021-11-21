import { combineReducers } from 'redux'
import { makeFetchingReducer, makeSetReducer } from './utils'

export const fetchThunk = () => async dispatch => {
	dispatch(setPending())
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
		const data = await response.json()
		const to_dos = data.slice(0, 10)
		dispatch(setFulfilled(to_dos))
	} catch(e) {
		dispatch(setError())
	}
}

export const setPending = () => {
	return {
		type: 'to-dos/pending'
	}
}

export const setFulfilled = payload => ({ type: 'to-dos/fulfilled', payload })

export const setError = e => ({ type: 'to-dos/error', error: e.message })

export const setComplete = payload => ({ type: 'to-do/complete', payload })

export const setFilter = payload => ({ type: 'to-do/set', payload })

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

export const filterReducer = makeSetReducer(['filter/set'])

export const fetchingReducer = makeFetchingReducer([
	'to-dos/pending',
	'to-dos/fulfilled',
	'to-dos/rejected',
])

export const reducer = combineReducers({
	to_dos: combineReducers({
		entities: toDosReducer,
		status: fetchingReducer,
	}),
	filter: filterReducer,
})

export const selectToDos = state => {
	const { to_dos: { entities }, filter } = state

	if (filter === 'completed') {
		return entities.filter(to_do => to_do.completed)
	}

	if (filter === 'uncompleted') {
		return entities.filter(to_do => !to_do.completed)
	}

	return entities
}

export const selectStatus = state => state.to_dos.status
