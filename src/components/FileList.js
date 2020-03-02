import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HistoryNavigator from '../containers/HistoryNavigator'
import FileGrid from './FileGrid'

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

    constructor(props) {
        super(props)
        this.gridRef = React.createRef()
    }

    render() {
        const { className, defaultClassName, ...rest } = this.props
        return (
            <div className={classNames(defaultClassName, className)}>
                <HistoryNavigator {...rest} />
                <FileGrid ref={this.gridRef} height={400} />
            </div>
        )
    }
}

export default FileList
