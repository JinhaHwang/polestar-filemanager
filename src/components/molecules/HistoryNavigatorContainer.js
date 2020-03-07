import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { syncActions, asyncActions } from 'redux/actions'
import HistoryNavigator from './HistoryNavigator'
import { trimPathSelector, directoryTreePathSelector } from '../../redux/selectors'

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
                explorePath: asyncActions.explorePath,
                changePath: syncActions.changePath,
                setPath: syncActions.setPath,
            },
            dispatch,
        ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryNavigator)
