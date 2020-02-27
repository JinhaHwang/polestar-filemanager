import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'polestar-ui-kit'
import { LicenseManager } from 'ag-grid-enterprise/main'
import { fileList } from 'common/constants'

import HistoryNavigator from '../containers/HistoryNavigator'

class FileList extends Component {
    static propTypes = {
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultClassName: PropTypes.string,
        columnDefs: PropTypes.array,
    }

    static defaultProps = {
        defaultClassName: 'FileList',
        className: '',
        columnDefs: fileList.DEFAULT_COLUMN_DEFS,
    }

    static displayName = 'FileList'

    constructor(props) {
        super(props)
        this.gridRef = React.createRef()

        // ag-grid 라이센스 등록
        LicenseManager.setLicenseKey(
            'NKIA_MultiApp_1Devs11_June_2020__MTU5MTgzMDAwMDAwMA==f242cc947387ab63c084c10cfc03dc9b',
        )
    }

    render() {
        const { className, defaultClassName, columnDefs, ...rest } = this.props
        return (
            <div className={classNames(defaultClassName, className)}>
                <HistoryNavigator {...rest} />
                <Grid
                    ref={this.gridRef}
                    columnDefs={columnDefs}
                    height={300}
                />
            </div>
        )
    }
}

export default FileList
