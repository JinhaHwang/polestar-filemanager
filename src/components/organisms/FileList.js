import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HistoryNavigatorContainer from '../molecules/HistoryNavigatorContainer'
import FileGridContainer from '../molecules/FileGridContainer'

const FileList = props => {
    const { defaultClassName, className } = props
    return (
        <div className={classNames(defaultClassName, className)}>
            <HistoryNavigatorContainer />
            <FileGridContainer />
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
