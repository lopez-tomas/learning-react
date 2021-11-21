export const reduceReducers = (...reducers) => (state, action) =>
	reducers.reduce((acc, el) => el(acc, action), state)

const initialFetching = { loading: 'idle', error: null }

// higher order reducer
export const makeFetchingReducer = actions => (state = initialFetching, action) => {
	switch(action.type) {
		case actions[0]: {
			return { ...state, loading: 'pending' }
		}
		case actions[1]: {
			return { ...state, loading: 'succeeded' }
		}
		case actions[2]: {
			return { error: action.error, loading: 'rejected' }
		}
		default:
			return state
	}
}

export const makeSetReducer = actions => (state = 'all', action) => {
	switch(action.type) {
		case actions[0]:
			return action.payload
		default:
			return state
	}
}

export const makeCrudReducer = actions => (state = [], action) => {
	switch(action.type) {
		case actions[0]: {
			return state.concat({ ...action.payload })
		}
		case actions[1]: {
			const new_entities = state.map(entity => {
				if (entity.id === action.payload.id) {
					return { ...entity, completed: !entity.completed }
				}

				return entity
			})
			return new_entities
		}
		default:
			return state
	}
}
