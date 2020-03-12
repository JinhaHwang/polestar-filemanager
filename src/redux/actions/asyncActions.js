import { createAsyncAction } from 'redux-promise-middleware-actions'
import { setPath } from './syncActions'
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
    dispatch(setPath(path))
    dispatch(fetchDirectoryTree('/some/api/directories', path))
    dispatch(fetchFileList('/some/api/files', path))
}
