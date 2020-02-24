import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Provider } from 'react-redux'
import DirectoryTree from 'components/DirectoryTree'
import { fileExplorerType } from 'common/constants'
import configureStore from 'stores/configureStore'

class FileExplorer extends Component {
    static propTypes = {
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultClassName: PropTypes.string,
        type: PropTypes.string,
    }

    static defaultProps = {
        defaultClassName: 'FileExplorer',
        className: '',
        type: fileExplorerType.DIRECTORY_TREE,
    }

    static displayName = 'FileExplorer'

    constructor(props) {
        super(props)
        this.store = configureStore()
    }

    render() {
        const { className, defaultClassName, type, ...rest } = this.props
        return (
            <Provider store={this.store}>
                {type === fileExplorerType.DIRECTORY_TREE && (
                    <DirectoryTree
                        className={classNames(defaultClassName, className)}
                        {...rest}
                    />
                )}
            </Provider>
        )
    }
}

export default FileExplorer
