import React, {useCallback, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'
import { Field } from 'polestar-ui-kit'
import classNames from 'classnames'

const { TreeNode, DirectoryTree: AntDirectoryTree } = Tree

const DirectoryTree = props => {
    const { defaultClassName, className, items, hideInput, ...rest } = props

    const treeRef = useRef()

    const [path, setPath] = useState('')

    const handleSelect = useCallback((keys, event) => {
        const { onSelect } = rest
        if (onSelect) onSelect(keys, event)
        setPath(keys[0])
    }, [])

    const handleExpand = useCallback((keys, event) => {
        const { onExpand } = rest
        if (onExpand) onExpand(keys, event)
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
            {
                hideInput ? null
                : <Field.Input
                    readOnly
                    value={path}
                />
            }
        </div>
    )
}

DirectoryTree.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultClassName: PropTypes.string,
    items: PropTypes.array,
    onSelect: PropTypes.func,
    onExpand: PropTypes.func,
    hideInput: PropTypes.bool,
    path: PropTypes.string,
}
DirectoryTree.defaultProps = {
    defaultClassName: 'DirectoryTree',
    className: '',
    // items: [
    //     { title: 'Expand to load', key: '0' },
    //     { title: 'Expand to load', key: '1' },
    //     { title: 'Tree Node', key: '2', isLeaf: true },
    // ],
    items: null,
    onSelect: null,
    onExpand: null,
    hideInput: false,
    path: '',
}

export default DirectoryTree
