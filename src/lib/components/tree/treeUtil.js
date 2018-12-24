export function getInitialValuesMap(tree, initialMap={}) {
    return tree.reduce((map, node) => {
            map[node.id] = {value:node.value, parentId:node.parentId}
            return getInitialValuesMap(node.children, map)
        }, initialMap)
}