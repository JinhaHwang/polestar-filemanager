// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import DirectoryTree from '../components/DirectoryTree'

export default {
    title: 'DirectoryTree',
    component: DirectoryTree,
}

export const directoryTreeTest = () => <DirectoryTree />

export const directoryTreeProps = () => (
    <DirectoryTree
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
