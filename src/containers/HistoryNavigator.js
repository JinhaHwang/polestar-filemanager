import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { explorePath, changePath, setPath } from 'actions'
import HistoryNavigator from '../components/HistoryNavigator'
import { trimPathSelector, directoryTreePathSelector } from '../selectors'

const mapStateToProps = state => {
    return {
        path: directoryTreePathSelector(state),
        trimPath: trimPathSelector(state),
    }
}

const mapDispatchToProps = dispatch => {
    // dispahtch도 전달하고
    // 바인딩 된 액션들도 전달 한다
    return {
        dispatch,
        ...bindActionCreators(
            {
                explorePath,
                changePath,
                setPath,
            },
            dispatch,
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryNavigator)
