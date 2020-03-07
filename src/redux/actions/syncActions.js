import { createAction } from 'redux-actions'

// history 관련 액션
export const INIT_HISTORY_NAVIGATOR = 'INIT_HISTORY_NAVIGATOR'
export const initHistoryNavigator = createAction(INIT_HISTORY_NAVIGATOR)

export const SET_PATH = 'SET_PATH'
export const setPath = createAction(SET_PATH)

export const CHANGE_PATH = 'CHANGE_PATH'
export const changePath = createAction(CHANGE_PATH)

// directory 관련 액션
export const INIT_DIRECTORY_TREE = 'INIT_DIRECTORY_TREE'
export const initDirectoryTree = createAction(INIT_DIRECTORY_TREE)

export const SELECT_TREE_NODE = 'SELECT_TREE_NODE'
export const selectTreeNode = createAction(SELECT_TREE_NODE)

// filelist 관련 액션
export const INIT_FILE_LIST = 'INIT_FILE_LIST'
export const initFileList = createAction(INIT_FILE_LIST)


// undo redo 관련 액션
export const HISTORY_NAVIGATOR_UNDO = 'HISTORY_NAVIGATOR_UNDO'
export const historyNavigatorUndo = createAction(HISTORY_NAVIGATOR_UNDO)

export const HISTORY_NAVIGATOR_REDO = 'HISTORY_NAVIGATOR_REDO'
export const historyNavigatorRedo = createAction(HISTORY_NAVIGATOR_REDO)

export const DIRECTORY_TREE_UNDO = 'DIRECTORY_TREE_UNDO'
export const directoryTreeUndo = createAction(DIRECTORY_TREE_UNDO)

export const DIRECTORY_TREE_REDO = 'DIRECTORY_TREE_REDO'
export const directoryTreeRedo = createAction(DIRECTORY_TREE_REDO)
