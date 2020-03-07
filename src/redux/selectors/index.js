import { createSelector } from 'reselect'

export const historyNavigatorPathSelector = state =>
    state.getIn(['historyNavigator', 'present', 'path'])
export const trimPathSelector = createSelector(
    [historyNavigatorPathSelector],
    path => path.trim(),
)

export const fileListItemsSelector = state =>
    state.getIn(['fileList', 'present', 'items'])

export const directoryTreeItemsSelector = state =>
    state.getIn(['directoryTree', 'present', 'items'])
