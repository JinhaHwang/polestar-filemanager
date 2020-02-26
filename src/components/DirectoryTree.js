import React from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'
import { Field } from 'polestar-ui-kit'

const { TreeNode, DirectoryTree: AntDirectoryTree } = Tree

class DirectoryTree extends React.Component {
    static propTypes = {
        items: PropTypes.array,
        onSelect: PropTypes.func,
        onExpand: PropTypes.func,
    }

    static defaultProps = {
        items: [
            { title: 'Expand to load', key: '0' },
            { title: 'Expand to load', key: '1' },
            { title: 'Tree Node', key: '2', isLeaf: true },
        ],
        onSelect: null,
        onExpand: null,
    }

    onSelect = (keys, event) => {
        const { onSelect } = this.props
        if (onSelect) onSelect(keys, event)
    }

    onExpand = (keys, event) => {
        const { onExpand } = this.props
        if (onExpand) onExpand(keys, event)
    }

    renderTreeNodes = data =>
        data
            ? data.map(item => {
                  if (item.children) {
                      return (
                          <TreeNode
                              title={item.title}
                              key={item.key}
                              dataRef={item}
                          >
                              {this.renderTreeNodes(item.children)}
                          </TreeNode>
                      )
                  }
                  return <TreeNode key={item.key} {...item} dataRef={item} />
              })
            : null

    render() {
        const { items, ...rest } = this.props
        return (
            <>
                <AntDirectoryTree
                    {...rest}
                    multiple
                    defaultExpandAll
                    onSelect={this.onSelect}
                    onExpand={this.onExpand}
                    expandAction="doubleClick"
                >
                    {this.renderTreeNodes(items)}
                </AntDirectoryTree>
                <Field.Input />
            </>
        )
    }
}

export default DirectoryTree
