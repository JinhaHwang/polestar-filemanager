import React from 'react'
import DirectoryTree from "./DirectoryTree"
import FileList from "./FileList"
import FileGrid from "../molecules/FileGrid"
import HistoryNavigatorContainer from "../molecules/HistoryNavigatorContainer"

const FileExplorer = props => {
    return (
        <div>
            <HistoryNavigatorContainer />
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    flex: 1,
                }}>
                    <DirectoryTree />
                </div>
                <div style={{
                    flex: 4,
                }}>
                    <FileGrid />
                </div>
            </div>
        </div>
    )
}

FileExplorer.propTypes = {

}

export default FileExplorer
