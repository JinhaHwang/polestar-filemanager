import { connect } from 'react-redux'
import { explorePath, changePath } from 'actions'
import HistoryNavigator from '../components/HistoryNavigator'
import { trimPathSelector } from '../selectors'

const mapStateToProps = state => {
    return {
        path: trimPathSelector(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        explorePath: path => dispatch(explorePath(path)),
        changePath: path => dispatch(changePath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryNavigator)
