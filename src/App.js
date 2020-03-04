import React from 'react'
import './styles/App.less'
import FileExplorer from 'provider/FileExplorer'
import { constFileExplorer } from 'common/constants'

function App() {
    return (
        <div className="App">
            <FileExplorer type={constFileExplorer.TYPE.FILE_LIST} />
        </div>
    )
}

export default App
