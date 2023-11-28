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
    let maxLevel = 0;
    let res = [];
    
    function dfs(root, level){
        if(root == null){
            return;
        }
        if(maxLevel < level){
            res.push(root.val);
            maxLevel = level;
        }
        return dfs(root.right, level + 1), dfs(root.left, level + 1);
        
    }
    dfs(root, 1)
    return res;
};