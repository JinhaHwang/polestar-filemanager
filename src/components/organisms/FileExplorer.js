import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"
import DirectoryTreeContainer from "./DirectoryTreeContainer"
import FileGridContainer from "../molecules/FileGridContainer"
import HistoryNavigatorContainer from "../molecules/HistoryNavigatorContainer"

const FileExplorer = props => {
    const {
        defaultClassName, className,
    } = props
    return (
        <div className={classNames(defaultClassName, className)}>
            <HistoryNavigatorContainer />
            <div
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <DirectoryTreeContainer hideInput={true}/>
                </div>
                <div
                    style={{
                        flex: 4,
                    }}
                >
                    <FileGridContainer />
                </div>
            </div>
        </div>
    )
}

FileExplorer.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultClassName: PropTypes.string,
}
FileExplorer.defaultProps = {
    defaultClassName: 'FileExplorer',
    className: '',
}

export default FileExplorer
