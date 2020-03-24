import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { asyncActions, syncActions } from '../actions'
import { initReducerCreator } from './helper/commonReducer'

const initState = fromJS({
    items: null,
    selectedNode: null,
    pending: false,
    error: undefined,
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

        [asyncActions.fetchDirectoryTree.pending]: (state) =>
            state.set('pending', true),
        [asyncActions.fetchDirectoryTree.fulfilled]: (state, action) =>
            state
                .set('items', fromJS(action.payload))
                .set('error', undefined)
                .set('pending', false),
        [asyncActions.fetchDirectoryTree.rejected]: (state, action) =>
            state.set('error', fromJS(action.payload)).set('pending', false),
    },
    initState,
)

export default directoryTreeReducer
