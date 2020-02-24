import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

export default combineReducers({
    directoryTree: handleActions(
        {
            test: (state, action) => {
                return state
            },
        },
        null,
    ),
})
