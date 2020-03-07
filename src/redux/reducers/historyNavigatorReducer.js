import {combineActions, handleActions} from 'redux-actions'
import {fromJS, Map} from 'immutable'
import {syncActions} from "redux/actions"
import {initReducerCreator} from "./helper/commonReducer"

const initState = fromJS({
    path: ''
})

const historyNavigatorReducer = handleActions(
    {
        [syncActions.initHistoryNavigator]: initReducerCreator(initState),
        [combineActions(syncActions.setPath, syncActions.changePath)]: (state, action) => {
            return state.set('path', fromJS(action.payload))
        },
    },
    initState,
)

export default historyNavigatorReducer
