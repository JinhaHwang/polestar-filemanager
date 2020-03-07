// eslint-disable-next-line max-classes-per-file
import React from 'react'
import { action } from '@storybook/addon-actions'
import { constFileExplorer } from 'common/constants'
import App from 'provider/App'

export default {
    title: 'FileExplorer',
    component: App,
}
// TODO : 개선해서 docs 디렉터리로 넘기자
export const directoryTreeType = () => (
    <App
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
    <App
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
    <App
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
        <App
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
        <App
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
    return <App />
}
