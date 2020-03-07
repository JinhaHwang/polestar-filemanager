import React from 'react'
import DirectoryTree from "./DirectoryTree"
import FileList from "./FileList"

const FileExplorer = props => {
    return (
        <div style={{
            display: 'flex',
        }}>
            <DirectoryTree />
            <FileList />
        </div>
    )
}

FileExplorer.propTypes = {

}

export default FileExplorer
