import React from 'react'
import './styles/App.less'
import FileExplorer from 'components/FileExplorer'
import { fileExplorerType } from 'common/constants'

function App() {
    return (
        <div className="App">
            <FileExplorer type={fileExplorerType.FILE_LIST} />
        </div>
    )
}

export default App
