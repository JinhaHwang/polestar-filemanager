import React from 'react'
import { connect } from 'react-redux'
import { directoryTreeItemsSelector } from '../../redux/selectors'
import DirectoryTree from './DirectoryTree'

const mapStateToProps = state => {
    const items = directoryTreeItemsSelector(state)
    return {
        items: items ? items.toJS() : null,
    }
}

const Connected = connect(mapStateToProps)(DirectoryTree)
const Forwarded = React.forwardRef((props, ref) => (
    <Connected {...props} forwardRef={ref} />
))
export default Forwarded
