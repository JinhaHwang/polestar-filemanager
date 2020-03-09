import moment from "moment"

export const getDirectoryTreeItems = async (url, path) => Promise.resolve([
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
])


export const getFileListItems = async (url, path) => Promise.resolve([
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
    },
])
