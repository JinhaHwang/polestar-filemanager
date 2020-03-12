// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { Provider } from 'react-redux'
import base from 'paths.macro'
import FileGrid from 'components/molecules/FileGrid'
import configureStore from '../../redux/stores/configureStore'

export default {
    title: `${base}FileGrid`,
    component: FileGrid,
    decorators: [
        storyFn => {
            const store = configureStore()
            return <Provider store={store}>{storyFn()}</Provider>
        },
    ],
}

// HistoryNavigator 때문에 Provider를 통해 store 전달 필요
export const defaultFileGrid = () => <FileGrid />

export const overwriteHeight = () => <FileGrid height={200} />

// todo : 데이터 전달하는 스토리는 좀 고민해봐야할 듯
// export const rowData = () => {
//     const addIsDirectoryKeyByMode = ({ mode, ...file }) => ({
//         ...file,
//         mode,
//         isDirectory: mode.charAt(0) === 'd',
//     })
//     const data = [
//         {
//             name: 'test',
//             mode: '-rw-r--r--',
//             owner: 'hwangjinha',
//             group: 'staff',
//             size: '75B',
//             modified: moment(),
//         },
//         {
//             name: 'test2',
//             mode: 'drwxr-xr-x',
//             owner: 'hwangjinha',
//             group: 'staff',
//             size: '75B',
//             modified: moment(),
//         },
//     ]
//
//     return <FileGrid rowData={data.map(addIsDirectoryKeyByMode)} />
// }

export const events = () => {
    const handleGridReady = params => {
        console.log(params)
    }
    return <FileGrid onGridReady={handleGridReady} />
}
