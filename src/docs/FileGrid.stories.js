// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import moment from 'moment'
import FileGrid from 'components/molecules/FileGrid'
import { constFileGrid } from '../common/constants'

export default {
    title: `${base}FileGrid`,
    component: FileGrid,
}

// HistoryNavigator 때문에 Provider를 통해 store 전달 필요
export const index = () => <FileGrid />

index.story = {
    name: 'default',
}

export const overwriteHeight = () => <FileGrid height={200} />

overwriteHeight.story = {
    name: 'overwrite height',
}

export const rowData = () => {
    const addIsDirectoryKeyByMode = ({ mode, ...file }) => ({ ...file, mode, isDirectory: mode.charAt(0) === 'd'})
    const data = [
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
        }
    ]

    return (
        <FileGrid
            rowData={data.map(addIsDirectoryKeyByMode)}
        />
    )
}
rowData.story = {
    name: 'row data',
}

// TODO events 와 data 스토리 작성
export const events = () => {
    const handleGridReady = params => {
        console.log(params)
    }
    return <FileGrid onGridReady={handleGridReady} />
}
