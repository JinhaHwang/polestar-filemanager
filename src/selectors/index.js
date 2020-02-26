import {createSelector} from "reselect"

export const  directoryTreePathSelector = state => state.getIn(['directoryTree', 'path'])
export const trimPathSelector = createSelector([directoryTreePathSelector], path => path.trim())
