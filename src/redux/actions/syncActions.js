import { createAction } from 'redux-actions'

export const SELECT_TREE_NODE = 'SELECT_TREE_NODE'
export const selectTreeNode = createAction(SELECT_TREE_NODE)

export const SET_PATH = 'SET_PATH'
export const setPath = createAction(SET_PATH)
export const CHANGE_PATH = 'CHANGE_PATH'
export const changePath = createAction(CHANGE_PATH)

// history 관련 액션
export const HISTORY_UNDO = 'HISTORY_UNDO'
export const historyUndo = createAction(HISTORY_UNDO)

export const HISTORY_REDO = 'HISTORY_REDO'
export const historyRedo = createAction(HISTORY_REDO)

export const DIRECTORY_TREE_UNDO = 'DIRECTORY_TREE_UNDO'
export const directoryTreeUndo = createAction(DIRECTORY_TREE_UNDO)

export const DIRECTORY_TREE_REDO = 'DIRECTORY_TREE_REDO'
export const directoryTreeRedo = createAction(DIRECTORY_TREE_REDO)
