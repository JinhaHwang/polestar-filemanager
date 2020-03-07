import { handleActions, combineActions } from 'redux-actions'
import { fromJS, Map } from 'immutable'
import { syncActions, asyncActions } from "redux/actions"
import {initReducerCreator} from "./helper/commonReducer"


const initState = fromJS({
    items: [],
})

const directoryTreeReducer = handleActions(
    {
        [syncActions.initDirectoryTree]: initReducerCreator(initState),
        [syncActions.selectTreeNode]: (state, action) => {
            return state.set('selectedNode', fromJS(action.payload))
        },
    },
    initState,
)

export default directoryTreeReducer
