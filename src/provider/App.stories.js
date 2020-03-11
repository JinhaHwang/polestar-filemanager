import base from 'paths.macro'
import React, {useCallback, useEffect, useRef} from 'react'
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
                    { title: 'parent 0', key: 'parent 0' },
                    {
                        title: 'parent 1',
                        key: 'parent 1',
                        children: [
                            {
                                title: 'leaf 1-0',
                                key: 'parent 1/leaf 1-0',
                                isLeaf: true,
                            },
                            {
                                title: 'leaf 1-1',
                                key: 'parent 1/leaf 1-1',
                                isLeaf: true,
                            },
                        ],
                    },
                    { title: 'hello', isLeaf: true, key: 'hello' },
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
        console.log(appRef.current.getAllState())
    }, [])

    const handleGetAllState = useCallback(() => console.log(appRef.current.getAllState()), [])
    return (<>
        <div>
            <button onClick={handleGetAllState}>getStateLog</button>
        </div>
        <App ref={appRef} type={constApp.TYPE.FILE_LIST} />
    </>)
}
