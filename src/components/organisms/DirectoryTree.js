import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'
import { Field } from 'polestar-ui-kit'
import classNames from 'classnames'
import {useSelector} from "react-redux"
import {directoryTreeItemsSelector} from "../../redux/selectors"

const { TreeNode, DirectoryTree: AntDirectoryTree } = Tree

const DirectoryTree = props => {
    const { defaultClassName, className, hideInput, ...rest } = props
    const items = useSelector(state => {
        const items$ = directoryTreeItemsSelector(state)
        return items$ ? items$.toJS() : null
    })

    const treeRef = useRef()

    const [path, setPath] = useState('')

    const handleSelect = useCallback((keys, event) => {
        const { onSelect } = rest
        if (onSelect) onSelect(keys, event)
        setPath(keys[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleExpand = useCallback((keys, event) => {
        const { onExpand } = rest
        if (onExpand) onExpand(keys, event)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderTreeNodes = useCallback(
        data =>
            data
                ? data.map(item => {
                      if (item.children) {
                          return (
                              <TreeNode
                                  title={item.title}
                                  key={item.key}
                                  dataRef={item}
                              >
                                  {renderTreeNodes(item.children)}
                              </TreeNode>
                          )
                      }
                      return (
                          <TreeNode key={item.key} {...item} dataRef={item} />
                      )
                  })
                : null,
        [],
    )

    return (
        <div className={classNames(defaultClassName, className)}>
            <AntDirectoryTree
                ref={treeRef}
                {...rest}
                // multiple
                defaultExpandAll
                onSelect={handleSelect}
                onExpand={handleExpand}
                expandAction="doubleClick"
            >
                {renderTreeNodes(items)}
            </AntDirectoryTree>
            {!hideInput && <Field.Input readOnly value={path} />}
        </div>
    )
}

DirectoryTree.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultClassName: PropTypes.string,
    onSelect: PropTypes.func,
    onExpand: PropTypes.func,
    hideInput: PropTypes.bool,
    path: PropTypes.string,
}
DirectoryTree.defaultProps = {
    defaultClassName: 'DirectoryTree',
    className: '',
    onSelect: null,
    onExpand: null,
    hideInput: false,
    path: '',
}

export default DirectoryTree
