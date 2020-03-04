import {createAction} from "redux-actions"

export const myThunk = () => dispatch => dispatch(createAction('HELLO')())

export const explorePath = path => (dispatch, getState) => {
    dispatch(createAction('EXPLORE_PATH')(path))
    dispatch(createAction('FETCH_FILE_LIST')(path))
    console.log(getState().toJS())
    dispatch(myThunk())
}

