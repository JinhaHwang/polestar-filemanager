// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import { fileExplorerType } from 'common/constants'
import FileExplorer from 'components/FileExplorer'

export default {
    title: 'FileExplorer',
    component: FileExplorer,
}

export const directoryTreeType = () => (
    <FileExplorer
        type={fileExplorerType.DIRECTORY_TREE}
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

export const defaultType = () => (
    <FileExplorer
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


export const otherType = () => (
    <FileExplorer
        type="NO_FOUND"
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

export const multiExplorer = () => (
    <>
        <FileExplorer
            type={fileExplorerType.DIRECTORY_TREE}
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
        <FileExplorer
            type="DirectoryTree"
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
    </>
)
