import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { asyncActions, syncActions } from '../actions'
import { initReducerCreator } from './helper/commonReducer'

const initState = fromJS({
    items: null,
    pending: false,
    error: undefined
})

const fileListReducer = handleActions(
    {
        [syncActions.initFileList]: initReducerCreator(initState),
        [syncActions.setFileListItems]: (state, action) => {
            return state.set('items', fromJS(action.payload))
        },
        [asyncActions.fetchFileList.pending]: (state) =>
            state.set('pending', true),
        [asyncActions.fetchFileList.fulfilled]: (state, action) =>
            state
                .set('items', fromJS(action.payload))
                .set('error', undefined)
                .set('pending', false),
        [asyncActions.fetchFileList.rejected]: (state, action) =>
            state.set('error', fromJS(action.payload)).set('pending', false),
    },
    initState,
)

export default fileListReducer
