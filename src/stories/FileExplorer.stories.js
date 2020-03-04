// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import { constFileExplorer } from 'common/constants'
import FileExplorer from 'provider/FileExplorer'

export default {
    title: 'FileExplorer',
    component: FileExplorer,
}
// TODO : 개선해서 docs 디렉터리로 넘기자
export const directoryTreeType = () => (
    <FileExplorer
        type={constFileExplorer.TYPE.DIRECTORY_TREE}
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
            type={constFileExplorer.TYPE.DIRECTORY_TREE}
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

export const myStoryFunc = () => {
    return <FileExplorer />
}
