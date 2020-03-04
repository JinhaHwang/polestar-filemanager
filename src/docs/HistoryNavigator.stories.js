// eslint-disable-next-line max-classes-per-file
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import HistoryNavigator from 'components/HistoryNavigator'
import HistoryNavigatorContainer from 'containers/HistoryNavigator'
import { constFileExplorer } from 'common/constants'
import FileExplorer from 'provider/FileExplorer'
import base from 'paths.macro'
import configureStore from '../redux/stores/configureStore'

export default {
    title: `${base}HistoryNavigator`,
    component: HistoryNavigator,
}

export const index = () => {
    const [path, setPath] = useState('')
    const handleChange = value => setPath(value)

    return (
        <HistoryNavigator
            path={path}
            onChange={handleChange}
            onBack={action('BACK')}
            onForward={action('FORWARD')}
            onRefresh={action('REFRESH')}
            onSubmit={action('EXPLORE_PATH')}
        />
    )
}
index.story = {
    name: 'default',
}

export const useStore = () => {
    const store = configureStore()
    return (
        <Provider store={store}>
            <HistoryNavigatorContainer
                onBack={action('BACK')}
                onForward={action('FORWARD')}
                onRefresh={action('REFRESH')}
                onSubmit={action('EXPLORE_PATH')}
            />
        </Provider>
    )
}
useStore.story = {
    name: 'use store',
}

export const useProvider = () => (
    <FileExplorer
        type={constFileExplorer.TYPE.FILE_LIST}
        onBack={action('BACK')}
        onForward={action('FORWARD')}
        onRefresh={action('REFRESH')}
        onSubmit={action('EXPLORE_PATH')}
    />
)
useProvider.story = {
    name: 'use provider',
}
