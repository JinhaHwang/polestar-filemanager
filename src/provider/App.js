import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Provider } from 'react-redux'
import DirectoryTreeContainer from 'components/organisms/DirectoryTreeContainer'
import { constApp } from 'common/constants'
import configureStore from 'redux/stores/configureStore'
import FileList from '../components/organisms/FileList'
import { syncActions } from '../redux/actions'
import FileExplorer from '../components/organisms/FileExplorer'
import {presentStateAll} from "../redux/selectors"

import 'styles/index.less'
import './App.less'

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
        defaultClassName: 'FileExplorerWrap',
        className: '',
        type: constApp.TYPE.FILE_EXPLORER,
        directoryTree: null,
        historyNavigator: null,
        fileList: null,
    }

    static displayName = 'FileExplorerWrap'

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

    getAllState = () => {
        return presentStateAll(this.store.getState()).toJS()
    }

    render() {
        const {
            className,
            defaultClassName,
            type,
            directoryTree,
            historyNavigator,
            fileList,
            ...rest
        } = this.props
        return (
            <Provider store={this.store}>
                <div className={classNames(defaultClassName, className)}>
                    {type === constApp.TYPE.FILE_EXPLORER && (
                        <FileExplorer {...rest} />
                    )}
                    {type === constApp.TYPE.DIRECTORY_TREE && (
                        <DirectoryTreeContainer {...rest} />
                    )}
                    {type === constApp.TYPE.FILE_LIST && <FileList {...rest} />}
                </div>
            </Provider>
        )
    }
}

export default App
