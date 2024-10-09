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
 * @return {number[]}
 */

var rightSideView = function(root) {
    let result = []
    dfs(root, 0)
    
    function dfs(root, level) {
        if(!root)
            return
        if(result.length === level)
            result.push(root.val)
        // console.log(root.val, level)
        dfs(root.right, level + 1)
        dfs(root.left, level + 1)
    }
    
    return result

};