import {combineActions, handleActions} from 'redux-actions'
import {fromJS, Map} from 'immutable'
import {syncActions} from "redux/actions"


const historyNavigatorReducer = handleActions(
    {
        [combineActions(syncActions.setPath, syncActions.changePath)]: (state, action) => {
            return state.set('path', fromJS(action.payload))
        },
    },
    fromJS({
        path: ''
    }),
)

export default historyNavigatorReducer
