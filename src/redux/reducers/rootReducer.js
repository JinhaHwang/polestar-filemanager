import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import undoable, { includeAction } from 'redux-undo'
import directoryTreeReducer from './directoryTreeReducer'
import { asyncActions, syncActions } from '../actions'
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
        fileList: undefined,
    })
// redux-immutable모듈의 combineReducers는 두번째 인자로 getDefaultState 함수를 받는다(여기선 Record로 만든 Immutable 생성자)
export default combineReducers(
    {
        directoryTree: undoable(directoryTreeReducer, {
            filter: includeAction([
                syncActions.SET_DIRECTORY_TREE_ITEMS,
                asyncActions.fetchDirectoryTree.fulfilled.toString(),
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
        fileList: undoable(fileListReducer, {
            filter: includeAction([
                syncActions.SET_FILE_LIST_ITEMS,
                asyncActions.fetchFileList.fulfilled.toString(),
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
        historyNavigator: undoable(historyNavigatorReducer, {
            filter: includeAction([
                syncActions.SET_PATH,
            ]),
            limit: constApp.UNDOABLE.LIMIT,
        }),
    },
    initStateCreator,
)
