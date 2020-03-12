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

export const SET_DIRECTORY_TREE_ITEMS = 'SET_DIRECTORY_TREE_ITEMS'
export const setDirectoryTreeItems = createAction(SET_DIRECTORY_TREE_ITEMS)

export const SELECT_TREE_NODE = 'SELECT_TREE_NODE'
export const selectTreeNode = createAction(SELECT_TREE_NODE)

// filelist 관련 액션
export const INIT_FILE_LIST = 'INIT_FILE_LIST'
export const initFileList = createAction(INIT_FILE_LIST)

export const SET_FILE_LIST_ITEMS = 'SET_FILE_LIST_ITEMS'
export const setFileListItems = createAction(SET_FILE_LIST_ITEMS)

