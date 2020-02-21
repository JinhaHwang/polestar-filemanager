import React from 'react'
import { Tree } from 'antd'

const { TreeNode, DirectoryTree: AntDirectoryTree } = Tree

// class DirectoryTree extends React.Component {
//     static propTypes = {
//         items: PropTypes.array,
//     }
//     static defaultProps = {
//         items: null,
//     }
//
//     onSelect = (keys, event) => {
//         console.log('Trigger Select', keys, event)
//     }
//
//     onExpand = () => {
//         console.log('Trigger Expand')
//     }
//
//     renderTreeItems = (items) => {
//         if (items === undefined || items === null) {
//             return null;
//         }
//         if (Array.isArray(items)) {
//             return items.map((item) => {
//                 return this.renderTreeForHierarchy(item);
//             });
//         }
//         return this.renderTreeForHierarchy(items);
//     }
//
//     renderTreeForHierarchy = (item) => {
//         const { idKey, childrenKey/* , ondemand */ } = this.props;
//         if (item === null || Object.keys(item).length === 0) {
//             return null;
//         }
//         // const isLeaf = ondemand ? item.isLeaf : undefined;
//         // node icon
//         const icon = this.renderIcon(item);
//         let iconEl;
//         if (icon) {
//             iconEl = typeof icon === 'string' ? <Icon name={icon} /> : icon;
//         } else if (item.icon) {
//             iconEl = typeof item.icon === 'string' ? <Icon name={item.icon} /> : item.icon;
//         }
//
//         // node label
//         const labelEl = this.renderLabel(item);
//         return (
//             <TreeNode
//                 key={item[idKey]}
//                 // icon={(item.icon) ? <Icon name={item.icon} /> : null}
//                 icon={iconEl}
//                 // title={this.searhHighlight(item[labelKey])}
//                 title={labelEl}
//                 isLeaf={item.isLeaf}
//                 dataRef={item}
//                 disabled={item.disabled}
//                 disableCheckbox={item.disableCheckbox}
//             >
//                 {(item[childrenKey] && item[childrenKey].length > 0) ? item[childrenKey].map((childItem) => {
//                     return this.renderTreeForHierarchy(childItem);
//                 }) : null}
//             </TreeNode>
//         );
//     }
//
//     render() {
//         const { items } = this.props
//         return (
//             <AntDirectoryTree
//                 multiple
//                 defaultExpandAll
//                 onSelect={this.onSelect}
//                 onExpand={this.onExpand}
//                 expandAction="doubleClick"
//             >
//                 {this.renderTreeItems}
//                 <TreeNode title="parent 0" key={`0-0`}>
//                     <TreeNode title="leaf 0-0" key={`0-0-0`} isLeaf />
//                     <TreeNode title="leaf 0-1" key={`0-0-1`} isLeaf />
//                 </TreeNode>
//             </AntDirectoryTree>
//         )
//     }
// }
//
// export default DirectoryTree
