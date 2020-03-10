import base from 'paths.macro'
import React, {useEffect, useRef} from 'react'
import App from './App'
import { constApp } from '../common/constants'
import {syncActions} from "../redux/actions"

export default {
    title: `${base}App`,
    component: App,
}

export const defaultApp = () => {
    return <App />
}

export const typeFileExplorer = () => {
    return <App type={constApp.TYPE.FILE_EXPLORER} />
}

export const typeDirectoryTree = () => {
    return (
        <App
            type={constApp.TYPE.DIRECTORY_TREE}
            directoryTree={{
                items: [
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
                ]
            }}
        />
    )
}

export const typeFileList = () => {
    return <App type={constApp.TYPE.FILE_LIST} />
}

export const useRefTest = () => {
    const appRef = useRef()
    useEffect(() => {
        // didmount
        console.log(appRef.current)
        const { store } = appRef.current
        store.dispatch(syncActions.setPath('hello world'))
    }, [])
    return <App ref={appRef} type={constApp.TYPE.FILE_LIST} />
}
