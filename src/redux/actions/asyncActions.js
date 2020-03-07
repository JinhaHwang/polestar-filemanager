import { createAction } from 'redux-actions'
import moment from 'moment'
import {
    setFileListItems,
    directoryTreeUndo,
    fileListUndo,
    historyNavigatorUndo,
    directoryTreeRedo,
    fileListRedo,
    historyNavigatorRedo,
} from './syncActions'

export const myThunk = () => dispatch => dispatch(createAction('HELLO')())

export const explorePath = path => (dispatch, getState) => {
    dispatch(createAction('EXPLORE_PATH')(path))
    dispatch(createAction('FETCH_FILE_LIST')(path))
    console.log(getState().toJS())
    dispatch(
        setFileListItems([
            {
                name: 'test',
                mode: '-rw-r--r--',
                owner: 'hwangjinha',
                group: 'staff',
                size: '75B',
                modified: moment(),
            },
            {
                name: 'test2',
                mode: 'drwxr-xr-x',
                owner: 'hwangjinha',
                group: 'staff',
                size: '75B',
                modified: moment(),
            },
        ]),
    )
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
