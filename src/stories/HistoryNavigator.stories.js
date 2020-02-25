// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import HistoryNavigator from 'components/HistoryNavigator'
import FileExplorer from "../components/FileExplorer"
import {fileExplorerType} from "../common/constants"

export default {
    title: 'HistoryNavigator',
    component: HistoryNavigator,
}

export const historyNavigator = () => (
    <HistoryNavigator
        onBack={action('BACK')}
        onForward={action('FORWARD')}
        onRefresh={action('REFRESH')}
        onSubmit={action('SET_PATH')}
    />
)

export const fileExplorerTypeFileList = () => (
    <FileExplorer
        type={fileExplorerType.FILE_LIST}
        onBack={action('BACK')}
        onForward={action('FORWARD')}
        onRefresh={action('REFRESH')}
        onSubmit={action('SET_PATH')}
    />
)
