// eslint-disable-next-line max-classes-per-file
import React from 'react'
import base from 'paths.macro'
import { action } from '@storybook/addon-actions'
import DirectoryTree from 'components/organisms/DirectoryTree'
import App from 'provider/App'
import { constApp } from 'common/constants'

export default {
    title: `${base}DirectoryTree`,
    component: DirectoryTree,
}

export const index = () => <DirectoryTree />
index.story = {
    name: 'default',
}

export const events = () => (
    <DirectoryTree
        onSelect={action('selected')}
        onExpand={action('expanded')}
    />
)
events.story = {
    name: 'events',
}

export const data = () => (
    <DirectoryTree
        items={[
            { title: 'Expand to load', key: '0-1' },
            {
                title: 'Expand to load',
                key: '0-2',
                children: [
                    {
                        key: '0-2-1',
                        title: 'hello',
                        isLeaf: true,
                    },
                ],
            },
            { title: 'Tree Node', isLeaf: true, key: '0-3' },
        ]}
    />
)
data.story = {
    name: 'data',
}

export const actuallyUse = () => (
    <App
        type={constApp.TYPE.DIRECTORY_TREE}
        onSelect={action('selected')}
        onExpand={action('expanded')}
        items={[
            { title: 'Expand to load', key: '0-1' },
            {
                title: 'Expand to load',
                key: '0-2',
                children: [
                    {
                        key: '0-2-1',
                        title: 'hello',
                        isLeaf: true,
                    },
                ],
            },
            { title: 'Tree Node', isLeaf: true, key: '0-3' },
        ]}
    />
)
actuallyUse.story = {
    name: 'actually use'
}
