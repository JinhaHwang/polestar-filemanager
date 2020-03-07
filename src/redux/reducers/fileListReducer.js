import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions, asyncActions } from "redux/actions"
import {initReducerCreator} from "./helper/commonReducer"


const initState = fromJS({
    items: [],
})

const fileListReducer = handleActions(
    {
        [syncActions.initFileList]: initReducerCreator(initState),
        [syncActions.setFileList]: (state, action) => {
            return state.set('items', fromJS(action.payload))
        },
    },
    initState,
)

export default fileListReducer
