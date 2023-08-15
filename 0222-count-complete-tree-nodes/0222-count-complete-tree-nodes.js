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
 * @return {number}
 */
var countNodes = function(root) {
    let count = 0;
    nodes(root);
    function nodes(root){
        if(root == null) return 0;
        nodes(root.left);
        count++;
        nodes(root.right);
        
    }
    
    return count;
};