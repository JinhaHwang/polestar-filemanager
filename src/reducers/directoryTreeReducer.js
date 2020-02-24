import { handleActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'

import { selectTreeNode } from '../actions'

export default handleActions(
    {
        [selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },
    },
    Map({}),
)
