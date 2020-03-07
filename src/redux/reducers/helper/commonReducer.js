import {fromJS} from "immutable"

export const initReducerCreator = initState => (state, action) => {
    return action.payload ? fromJS(action.payload) : initState
}
