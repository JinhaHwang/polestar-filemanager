import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HistoryNavigator from '../containers/HistoryNavigator'

class FileList extends Component {
    static propTypes = {
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultClassName: PropTypes.string,
    }

    static defaultProps = {
        defaultClassName: 'FileList',
        className: '',
    }

    static displayName = 'FileList'

    render() {
        const { className, defaultClassName, ...rest } = this.props
        return (
            <div className={classNames(defaultClassName, className)}>
                <HistoryNavigator {...rest} />
                {/* TODO: Grid가 올 자리 */}
            </div>
        )
    }
}

export default FileList
