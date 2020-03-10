import {connect} from 'react-redux'
import {directoryTreeItemsSelector} from '../../redux/selectors'
import DirectoryTree from './DirectoryTree'

const mapStateToProps = state => {
    const items = directoryTreeItemsSelector(state)
    return {
        items: items ? items.toJS() : null,
    }
}

const ConnectedComponent = connect(mapStateToProps)(DirectoryTree)
export default ConnectedComponent
