import React from 'react'
import './styles/App.less'
import FileExplorer from 'provider/FileExplorer'
import { fileExplorer } from 'common/constants'

function App() {
    return (
        <div className="App">
            <FileExplorer type={fileExplorer.TYPE.FILE_LIST} />
        </div>
    )
}

export default App
