import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'

import {changePath, selectTreeNode, setPath} from '../actions'

const derectoryTreeReducer = handleActions(
    {
        [selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },
        [combineActions(setPath, changePath)]: (state, action) => {
            return state.set('path', fromJS(action.payload))
        },
    },
    Map({
        path: ''
    }),
)

export default derectoryTreeReducer
