import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions, asyncActions } from "redux/actions"
import {initReducerCreator} from "./helper/commonReducer"


const initState = fromJS({
    items: null,
})

const fileListReducer = handleActions(
    {
        [syncActions.initFileList]: initReducerCreator(initState),
        [syncActions.setFileListItems]: (state, action) => {
            return state.set('items', fromJS(action.payload))
        },
        [asyncActions.fetchFileList.pending]: (state, action) =>
            state.set('pending', true),
        [asyncActions.fetchFileList.fulfilled]: (state, action) =>
            state
                .set('items', fromJS(action.payload))
                .set('error', undefined)
                .set('pending', false),
        [asyncActions.fetchFileList.rejected]: (state, action) =>
            // todo: 추후 에러도 fromJS로 감싸야할 듯?
            state.set('error', action.payload).set('pending', false),
    },
    initState,
)

export default fileListReducer
