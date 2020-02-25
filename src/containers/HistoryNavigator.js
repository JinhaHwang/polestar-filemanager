import { connect } from 'react-redux'
import { setPath } from '../actions'
import HistoryNavigator from '../components/HistoryNavigator'
import { trimPathSelector } from '../selectors'

const mapStateToProps = state => {
    return {
        path: trimPathSelector(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPathDispatch: path => dispatch(setPath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryNavigator)
