import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'polestar-ui-kit'

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

    constructor(props) {
        super(props)
        this.gridRef = React.createRef()
    }

    gridColumns = [
        {
            headerName: 'propertyName',
            field: 'propertyName',
        },
        {
            headerName: 'dataType',
            field: 'dataType',
        },
        {
            headerName: 'description',
            field: 'description',
        },
    ]

    render() {
        const { className, defaultClassName, ...rest } = this.props
        return (
            <div className={classNames(defaultClassName, className)}>
                <HistoryNavigator {...rest} />
                {/* TODO: Grid가 올 자리 */}
                <Grid
                    ref={this.gridRef}
                    columnDefs={this.gridColumns}
                    height={300}
                />
            </div>
        )
    }
}

export default FileList
