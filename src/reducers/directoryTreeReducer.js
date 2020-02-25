import { handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'

import { selectTreeNode, setPath } from '../actions'

const derectoryTreeReducer = handleActions(
    {
        [selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },
        [setPath]: (state, action) => {
            return state.set('path', fromJS(action.payload))
        },
    },
    Map({}),
)

export default derectoryTreeReducer
