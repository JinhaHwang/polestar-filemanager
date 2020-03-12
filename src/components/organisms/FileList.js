import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HistoryNavigator from '../molecules/HistoryNavigator'
import FileGrid from '../molecules/FileGrid'

const FileList = props => {
    const { defaultClassName, className } = props
    return (
        <div className={classNames(defaultClassName, className)}>
            <HistoryNavigator />
            <FileGrid />
        </div>
    )
}

FileList.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultClassName: PropTypes.string,
}
FileList.defaultProps = {
    defaultClassName: 'FileList',
    className: '',
}

export default FileList
