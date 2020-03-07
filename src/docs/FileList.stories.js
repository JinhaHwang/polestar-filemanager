// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import { Provider } from 'react-redux'
import FileList from 'components/organisms/FileList'
import configureStore from 'redux/stores/configureStore'
import App from 'provider/App'
import { constFileExplorer } from 'common/constants'
import { fromJS } from 'immutable'
import rootReducer from '../redux/reducers/rootReducer'
import directoryTreeReducer from "../redux/reducers/directoryTreeReducer"
import {syncActions} from "../redux/actions"

export default {
    title: `${base}FileList`,
    component: FileList,
}

// HistoryNavigator 때문에 Provider를 통해 store 전달 필요
export const index = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <FileList />
        </Provider>
    )
}
index.story = {
    name: 'default',
}

export const initStoreByProps = () => {
    const optionProps = {
        directoryTree: {
            items: [1, 3, 5],
        },
        historyNavigator: {
            path: '/a/b/c'
        }
    }
    const store = configureStore()
    store.dispatch(syncActions.initDirectoryTree(optionProps.directoryTree))
    store.dispatch(syncActions.initHistoryNavigator(optionProps.historyNavigator))
    return (
        <Provider store={store}>
            <FileList />
        </Provider>
    )
}
initStoreByProps.story = {
    name: 'init store by props'
}

// TODO events 와 data 스토리 작성

export const stateIsolated = () => (
    <>
        <App type={constFileExplorer.TYPE.FILE_LIST} />
        <App type={constFileExplorer.TYPE.FILE_LIST} />
    </>
)
stateIsolated.story = {
    name: 'state isolated',
}
