// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import { Provider } from 'react-redux'
import FileList from 'components/FileList'
import configureStore from 'redux/stores/configureStore'
import FileExplorer from 'provider/FileExplorer'
import { constFileExplorer } from 'common/constants'
import { fromJS } from 'immutable'
import rootReducer from '../redux/reducers/rootReducer'

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

export const transmitReducer = () => {
    // const store = configureStore(
    //     rootReducer(
    //         fromJS({
    //             directoryTree: {
    //                 path: 'hello man ',
    //             },
    //         }),
    //     ),
    // )
    // todo: 리듀서로 props를 받아서 초기 상태를 만들어서 스토어를 구성해야함
    const store = configureStore()
    return (
        <Provider store={store}>
            <FileList />
        </Provider>
    )
}

// TODO events 와 data 스토리 작성

export const actuallyUse = () => (
    <FileExplorer type={constFileExplorer.TYPE.FILE_LIST} />
)
actuallyUse.story = {
    name: 'actually use',
}
