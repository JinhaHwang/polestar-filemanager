import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

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


export const presentStateAll = createSelector(
    [
        state => state.getIn(['historyNavigator', 'present']),
        state => state.getIn(['fileList', 'present']),
        state => state.getIn(['directoryTree', 'present']),
    ],
    (historyNavigator, fileList, directoryTree) => fromJS({
        historyNavigator, fileList, directoryTree
    })
)
