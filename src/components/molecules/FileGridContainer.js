import React from 'react'
import { connect } from 'react-redux'
import { fileListItemsSelector } from '../../redux/selectors'
import FileGrid from './FileGrid'

const mapStateToProps = state => {
    const items = fileListItemsSelector(state)
    return {
        items: items ? items.toJS() : null,
    }
}

const Connected = connect(mapStateToProps)(FileGrid)
const Forwarded = React.forwardRef((props, ref) => (
    <Connected {...props} forwardRef={ref} />
))
export default Forwarded