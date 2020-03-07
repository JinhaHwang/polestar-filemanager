import { combineReducers } from 'redux-immutable'
import { Record, fromJS } from 'immutable'
import undoable, { includeAction, excludeAction } from 'redux-undo'
import directoryTreeReducer from './directoryTreeReducer'
import { syncActions } from '../actions'
import historyNavigatorReducer from './historyNavigatorReducer'
import fileListReducer from './fileListReducer'
import { constApp } from '../../common/constants'

// redux 상태 트리의 키를 각각 undefined 로 초기화 해줘야
// 키에 해당하는 서브 리듀서에서 초기화를 진행하게 된다.
// 만약 여기서 undefined가 아닌 A값으로 초기화시 그 A값이 리듀서의 초기상태가 된다.
const initStateCreator = () =>
    fromJS({
        historyNavigator: undefined,
        directoryTree: undefined,
    })
// redux-immutable모듈의 combineReducers는 두번째 인자로 getDefaultState 함수를 받는다(여기선 Record로 만든 Immutable 생성자)
export default combineReducers(
    {
        directoryTree: undoable(directoryTreeReducer, {
            undoType: syncActions.DIRECTORY_TREE_UNDO,
            redoType: syncActions.DIRECTORY_TREE_REDO,
            filter: includeAction([
                syncActions.SET_DIRECTORY_TREE,
                // syncActions.CHANGE_PATH,
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
        fileList: undoable(fileListReducer, {
            undoType: syncActions.FILE_LIST_UNDO,
            redoType: syncActions.FILE_LIST_REDO,
            filter: includeAction([
                syncActions.SET_FILE_LIST_ITEMS,
                // syncActions.CHANGE_PATH,
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
        historyNavigator: undoable(historyNavigatorReducer, {
            undoType: syncActions.HISTORY_NAVIGATOR_UNDO,
            redoType: syncActions.HISTORY_NAVIGATOR_REDO,
            filter: includeAction([
                syncActions.SET_PATH,
                // syncActions.CHANGE_PATH,
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
    },
    initStateCreator,
)
