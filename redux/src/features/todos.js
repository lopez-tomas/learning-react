import { combineReducers } from 'redux'
import { makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer } from './utils'

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

export const setComplete = payload => ({ type: 'to-do/completed', payload })

export const setFilter = payload => ({ type: 'to-do/set', payload })


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
		return entities.filter(entities => entities.completed)
	}

	if (filter === 'uncompleted') {
		return entities.filter(entities => !entities.completed)
	}

	return entities
}

export const selectStatus = state => state.to_dos.status
