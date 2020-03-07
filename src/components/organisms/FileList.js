import React, {useRef} from 'react'

import HistoryNavigatorContainer from '../molecules/HistoryNavigatorContainer'
import FileGrid from '../molecules/FileGrid'

const FileList = props => {
    const gridRef = useRef()
    return (
        <>
            <HistoryNavigatorContainer />
            <FileGrid ref={gridRef} />
        </>
    )
}

FileList.propTypes = {
}

export default FileList
