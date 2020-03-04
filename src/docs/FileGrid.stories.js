// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import moment from 'moment'
import FileGrid from 'components/FileGrid'
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

export const defaultRowData = () => (
    <FileGrid
        rowData={[
            {
                name: 'test',
                mode: '-rw-r--r--',
                owner: 'hwangjinha',
                group: 'staff',
                size: '75B',
                modified: moment(),
            },
        ]}
    />
)

// TODO events 와 data 스토리 작성
export const events = () => {
    const handleGridReady = params => {
        console.log(params)
    }
    return <FileGrid onGridReady={handleGridReady} />
}
