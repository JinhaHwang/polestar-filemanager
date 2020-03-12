import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"
import DirectoryTree from "./DirectoryTree"
import FileGrid from "../molecules/FileGrid"
import HistoryNavigator from "../molecules/HistoryNavigator"

const FileExplorer = props => {
    const {
        defaultClassName, className,
    } = props
    return (
        <div className={classNames(defaultClassName, className)}>
            <HistoryNavigator />
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
                    <DirectoryTree hideInput/>
                </div>
                <div
                    style={{
                        flex: 4,
                    }}
                >
                    <FileGrid />
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
