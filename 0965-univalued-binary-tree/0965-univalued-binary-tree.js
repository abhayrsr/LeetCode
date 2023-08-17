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
var isUnivalTree = function(root) {
    let value = root.val;

    function tree(root){
        if(root == null) return 0;
        else if(root.val != value) return 1;
        return Math.max(tree(root.left), tree(root.right))
    }
    // console.log(tree(root))
    if(tree(root)) return false
    else return true
};