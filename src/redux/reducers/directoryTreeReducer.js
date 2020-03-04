import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions, asyncActions } from "redux/actions"


const directoryTreeReducer = handleActions(
    {
        [syncActions.selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },
        [combineActions(syncActions.setPath, syncActions.changePath)]: (state, action) => {
            return state.set('path', fromJS(action.payload))
        },
    },
    Map({
        path: ''
    }),
)

export default directoryTreeReducer
