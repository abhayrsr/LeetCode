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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null) return true
    
    let leftHeight = depth(root.left)
    let rightHeight = depth(root.right)
    
    return (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right) )
};

var depth = function(root){
    if(root == null){
        return 0;
    } else {
        return 1 + Math.max(depth(root.left), depth(root.right));
    }
}