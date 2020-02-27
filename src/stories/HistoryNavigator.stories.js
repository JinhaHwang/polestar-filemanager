// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import HistoryNavigator from 'components/HistoryNavigator'
import { fileExplorer } from 'common/constants'
import FileExplorer from '../components/FileExplorer'

export default {
    title: 'HistoryNavigator',
    component: HistoryNavigator,
}

export const historyNavigator = () => (
    <HistoryNavigator
        onBack={action('BACK')}
        onForward={action('FORWARD')}
        onRefresh={action('REFRESH')}
        onSubmit={action('EXPLORE_PATH')}
    />
)

export const fileExplorerTypeFileList = () => (
    <FileExplorer
        type={fileExplorer.TYPE.FILE_LIST}
        onBack={action('BACK')}
        onForward={action('FORWARD')}
        onRefresh={action('REFRESH')}
        onSubmit={action('EXPLORE_PATH')}
    />
)
