import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions, asyncActions } from 'redux/actions'
import { initReducerCreator } from './helper/commonReducer'

const initState = fromJS({
    items: null,
    selectedNode: null,
})

const directoryTreeReducer = handleActions(
    {
        [syncActions.initDirectoryTree]: initReducerCreator(initState),
        [syncActions.setDirectoryTreeItems]: (state, action) => {
            return state.set('items', fromJS(action.payload))
        },
        [syncActions.selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },

        [asyncActions.fetchDirectoryTree.pending]: (state, action) =>
            state.set('pending', true),
        [asyncActions.fetchDirectoryTree.fulfilled]: (state, action) =>
            state
                .set('items', fromJS(action.payload))
                .set('error', undefined)
                .set('pending', false),
        [asyncActions.fetchDirectoryTree.rejected]: (state, action) =>
            state.set('error', action.payload).set('pending', false),
    },
    initState,
)

export default directoryTreeReducer
