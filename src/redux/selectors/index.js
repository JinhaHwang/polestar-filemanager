import {createSelector} from "reselect"

export const  directoryTreePathSelector = state => state.getIn(['directoryTree', 'present', 'path'])
export const trimPathSelector = createSelector([directoryTreePathSelector], path => path.trim())
