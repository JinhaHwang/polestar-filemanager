import { createAction } from 'redux-actions'

export const SELECT_TREE_NODE = 'SELECT_TREE_NODE'
export const selectTreeNode = createAction(SELECT_TREE_NODE)

export const SET_PATH = 'SET_PATH'
export const setPath = createAction(SET_PATH)
export const CHANGE_PATH = 'CHANGE_PATH'
export const changePath = createAction(CHANGE_PATH)

export default {
    selectTreeNode,
    setPath,
    changePath,
}
