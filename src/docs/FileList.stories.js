// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import { Provider } from 'react-redux'
import FileList from 'components/FileList'
import configureStore from 'redux/stores/configureStore'
import FileExplorer from "provider/FileExplorer"
import { fileExplorer } from "common/constants"


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

// TODO events 와 data 스토리 작성


export const actuallyUse = () => (
    <FileExplorer type={fileExplorer.TYPE.FILE_LIST} />
)
actuallyUse.story = {
    name: 'actually use'
}
