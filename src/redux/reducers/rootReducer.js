import { combineReducers } from 'redux-immutable'
import { Record } from 'immutable'
import undoable from 'redux-undo'
import directoryTreeReducer from './directoryTreeReducer'
import { syncActions } from '../actions'

// redux 상태 트리의 키를 각각 undefined 로 초기화 해줘야
// 키에 해당하는 서브 리듀서에서 초기화를 진행하게 된다.
// 만약 여기서 undefined가 아닌 A값으로 초기화시 그 A값이 리듀서의 초기상태가 된다.
const InitRecord = Record({
    directoryTree: undefined,
})

// redux-immutable모듈의 combineReducers는 두번째 인자로 getDefaultState 함수를 받는다(여기선 Record로 만든 Immutable 생성자)
export default combineReducers(
    {
        directoryTree: undoable(directoryTreeReducer, {
            limit: 10,
            undoType: syncActions.HISTORY_UNDO,
            redoType: syncActions.HISTORY_REDO,
        }),
    },
    InitRecord,
)
