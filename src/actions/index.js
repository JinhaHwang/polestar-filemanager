import { createAction } from 'redux-actions'

export const SELECT_TREE_NODE = 'SELECT_TREE_NODE'
export const selectTreeNode = createAction(SELECT_TREE_NODE)

export const SET_PATH = 'SET_PATH'
export const setPath = createAction(SET_PATH)
export const CHANGE_PATH = 'CHANGE_PATH'
export const changePath = createAction(CHANGE_PATH)

// HistoryNavigator에서 디스패치할 액션 생성자
export const EXPLORE_PATH = 'EXPLORE_PATH'
export const explorePath = createAction(EXPLORE_PATH)
