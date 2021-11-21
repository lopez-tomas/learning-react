import { combineReducers } from 'redux'
import { mac, makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer } from './utils'

export const setPending = mac('to-dos/pending')
export const setFulfilled = mac('to-dos/fulfilled', 'payload')
export const setError = mac('to-dos/error', 'error')
export const setComplete = mac('to-do/completed', 'payload')
export const setFilter = mac('filter/set', 'payload')

export const fetchThunk = () => async dispatch => {
	dispatch(setPending())
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
		const data = await response.json()
		const to_dos = data.slice(0, 10)
		dispatch(setFulfilled(to_dos))
	} catch(e) {
		dispatch(setError(e.message))
	}
}

const fulfilledReducer = makeSetReducer(['to-dos/fulfilled'])
const crudReducer = makeCrudReducer(['to-do/add', 'to-do/completed'])

export const toDosReducer = reduceReducers(crudReducer, fulfilledReducer)

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
