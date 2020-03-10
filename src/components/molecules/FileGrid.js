import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'polestar-ui-kit'

import { LicenseManager } from 'ag-grid-enterprise/main'
import { constFileGrid } from 'common/constants'

// ag-grid 라이센스 등록
LicenseManager.setLicenseKey(
    'NKIA_MultiApp_1Devs11_June_2020__MTU5MTgzMDAwMDAwMA==f242cc947387ab63c084c10cfc03dc9b',
)

const FileGrid = props => {
    const {
        className,
        defaultClassName,
        columnDefs,
        items,
        onGridReady,
        ...rest
    } = props
    const isInit = useRef(true)
    const gridRef = useRef()

    // didupdate
    useEffect(() => {
        // mount 시점에는 실행 안시키려구.
        if (!isInit.current) {
            gridRef.current.rowData()
        }
    }, [items])

    // mount시에만 동작
    useEffect(() => {
        // mount시
        isInit.current = false
    }, [])

    // 함수 바인딩
    const handleGridReady = useCallback(params => {
        if (onGridReady) onGridReady(params)
    }, [])

    return (
        <Grid
            height={300}
            // 기본값은 상단에
            {...rest}
            // 덮어 쓸 값은 하단에
            className={classNames(defaultClassName, className)}
            ref={gridRef}
            columnDefs={columnDefs}
            // 원래 ag-grid-react에서는 rowData가 props로 넘어가야하는데
            // polestar-ui-kit에 구현된 Grid는 items를 props로 넘기면 api.setRowData(props.items)를 내부적으로 호출하게 돼있음
            items={items || []}
            onGridReady={handleGridReady}
        />
    )
}

FileGrid.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultClassName: PropTypes.string,
    columnDefs: PropTypes.array,
    items: PropTypes.array,
    onGridReady: PropTypes.func,
}

FileGrid.defaultProps = {
    defaultClassName: 'FileGrid',
    className: '',
    // 파일 목록 조회와 관련된 기본 컬럼정의
    columnDefs: constFileGrid.DEFAULT_COLUMN_DEFS,
    items: null,
    onGridReady: null,
}

export default FileGrid
