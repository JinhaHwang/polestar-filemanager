import { connect } from 'react-redux'
import { fileListItemsSelector } from '../../redux/selectors'
import FileGrid from './FileGrid'

const mapStateToProps = state => {
    const items = fileListItemsSelector(state)
    return {
        items: items ? items.toJS() : null,
    }
}

export default connect(mapStateToProps, null, null, {
    forwardRef: true,
})(FileGrid)
