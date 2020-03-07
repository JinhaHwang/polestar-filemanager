import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'polestar-ui-kit'
import { LicenseManager } from 'ag-grid-enterprise/main'
import { constFileGrid } from 'common/constants'

class FileGrid extends Component {
    static propTypes = {
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultClassName: PropTypes.string,
        columnDefs: PropTypes.array,
        items: PropTypes.array,
        rowData: PropTypes.array,
        onGridReady: PropTypes.func,
    }

    static defaultProps = {
        defaultClassName: 'FileGrid',
        className: '',
        // 파일 목록 조회와 관련된 기본 컬럼정의
        columnDefs: constFileGrid.DEFAULT_COLUMN_DEFS,
        items: null,
        rowData: null,
        onGridReady: null,
    }

    static displayName = 'FileGrid'

    constructor(props) {
        super(props)
        this.gridRef = React.createRef()

        // ag-grid 라이센스 등록
        LicenseManager.setLicenseKey(
            'NKIA_MultiApp_1Devs11_June_2020__MTU5MTgzMDAwMDAwMA==f242cc947387ab63c084c10cfc03dc9b',
        )
    }

    handleGridReady = params => {
        const { onGridReady, ...rest } = this.props
        if (onGridReady) onGridReady(params)
    }

    render() {
        const {
            className,
            defaultClassName,
            columnDefs,

            items,
            rowData,

            ...rest
        } = this.props
        return (
            <Grid
                height={300}
                // 기본값은 상단에
                {...rest}
                // 덮어 쓸 값은 하단에
                className={classNames(defaultClassName, className)}
                ref={this.gridRef}
                columnDefs={columnDefs}
                // 원래 ag-grid-react에서는 rowData가 props로 넘어가야하는데
                // polestar-ui-kit에 구현된 Grid는 items를 props로 넘기면 api.setRowData(props.items)를 내부적으로 호출하게 돼있음
                items={items || rowData}
            />
        )
    }
}

export default FileGrid
