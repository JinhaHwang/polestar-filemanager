import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Provider } from 'react-redux'
import DirectoryTree from 'components/DirectoryTree'
import { constFileExplorer } from 'common/constants'
import configureStore from 'redux/stores/configureStore'
import FileList from '../components/FileList'
import { syncActions } from '../redux/actions'
import 'styles/components/FileExplorer.less'

/**
 * store를 connect하는 container를 이용하려면
 * store를 제공하는 Provider 아래에서 사용해야 한다
 */
class App extends Component {
    static propTypes = {
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultClassName: PropTypes.string,
        type: PropTypes.string,
        directoryTree: PropTypes.object,
        historyNavigator: PropTypes.object,
        fileList: PropTypes.array,
    }

    static defaultProps = {
        defaultClassName: 'FileExplorer',
        className: '',
        type: constFileExplorer.TYPE.FILE_EXPLORER,
        directoryTree: null,
        historyNavigator: null,
        fileList: null,
    }

    static displayName = 'FileExplorer'

    constructor(props) {
        super(props)
        const { directoryTree, historyNavigator, fileList } = props
        this.store = configureStore()
        if (directoryTree) {
            this.store.dispatch(syncActions.initDirectoryTree(directoryTree))
        }
        if (historyNavigator) {
            this.store.dispatch(
                syncActions.initHistoryNavigator(historyNavigator),
            )
        }
        if (fileList) {
            this.store.dispatch(syncActions.initFileList(fileList))
        }
    }

    render() {
        const {
            className,
            defaultClassName,
            type,
            directoryTree,
            historyNavigator,
            ...rest
        } = this.props
        return (
            <Provider store={this.store}>
                {type === constFileExplorer.TYPE.FILE_EXPLORER && (
                    <div></div>
                )}
                {type === constFileExplorer.TYPE.DIRECTORY_TREE && (
                    <DirectoryTree
                        className={classNames(defaultClassName, className)}
                        {...rest}
                    />
                )}
                {type === constFileExplorer.TYPE.FILE_LIST && (
                    <FileList
                        className={classNames(defaultClassName, className)}
                        {...rest}
                    />
                )}
            </Provider>
        )
    }
}

export default App
