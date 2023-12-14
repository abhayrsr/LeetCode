/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalTraversal(root) {
  if (!root) return [];

  const columnNodes = new Map();
  const queue = [{ node: root, col: 0, row: 0 }];

  while (queue.length > 0) {
    const { node, col, row } = queue.shift();

    if (!columnNodes.has(col)) {
      columnNodes.set(col, []);
    }

    columnNodes.get(col).push({ val: node.val, row });

    if (node.left) {
      queue.push({ node: node.left, col: col - 1, row: row + 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, col: col + 1, row: row + 1 });
    }
  }

  const sortedColumns = Array.from(columnNodes.keys()).sort((a, b) => a - b);
  const result = [];

  for (const col of sortedColumns) {
    const nodes = columnNodes.get(col);
    nodes.sort((a, b) => {
      if (a.row !== b.row) {
        return a.row - b.row; // Sort by row first if different rows
      } else {
        return a.val - b.val; // Then sort by value if same row
      }
    });
    result.push(nodes.map(node => node.val));
  }

  return result;
}

