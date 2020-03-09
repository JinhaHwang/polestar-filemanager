import { createAsyncAction } from 'redux-promise-middleware-actions'
import {
    directoryTreeRedo,
    directoryTreeUndo,
    fileListRedo,
    fileListUndo,
    historyNavigatorRedo,
    historyNavigatorUndo,
} from './syncActions'
import { fileApi } from '../../common/apis'

export const fetchDirectoryTree = createAsyncAction(
    'FETCH_DIRECTORY_TREE',
    fileApi.getDirectoryTreeItems,
)

export const fetchFileList = createAsyncAction(
    'FETCH_FILE_LIST',
    fileApi.getFileListItems,
)

export const explorePath = path => (dispatch, getState) => {
    dispatch(fetchDirectoryTree('/some/api/directories', path))
    dispatch(fetchFileList('/some/api/files', path))
}

export const historyBack = () => dispatch => {
    dispatch(historyNavigatorUndo())
    dispatch(fileListUndo())
    dispatch(directoryTreeUndo())
}

export const historyForward = () => dispatch => {
    dispatch(historyNavigatorRedo())
    dispatch(fileListRedo())
    dispatch(directoryTreeRedo())
}
