import React from 'react'
import PropTypes from 'prop-types'
import { Tree } from 'antd'

const { TreeNode, DirectoryTree: AntDirectoryTree } = Tree

class DirectoryTree extends React.Component {
    static propTypes = {
      items: PropTypes.array
    };

    static defaultProps = {
      items: [
          { title: 'Expand to load', key: '0' },
          { title: 'Expand to load', key: '1' },
          { title: 'Tree Node', key: '2', isLeaf: true },
      ]
    };

    onSelect = (keys, event) => {
        console.log('Trigger Select', keys, event)
    }

    onExpand = () => {
        console.log('Trigger Expand')
    }

    renderTreeNodes = data =>
        data ? data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                )
            }
            return <TreeNode key={item.key} {...item} dataRef={item} />
        }) : null

    render() {
        const { items, ...rest } = this.props
        return (
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
        )
    }
}

export default DirectoryTree
