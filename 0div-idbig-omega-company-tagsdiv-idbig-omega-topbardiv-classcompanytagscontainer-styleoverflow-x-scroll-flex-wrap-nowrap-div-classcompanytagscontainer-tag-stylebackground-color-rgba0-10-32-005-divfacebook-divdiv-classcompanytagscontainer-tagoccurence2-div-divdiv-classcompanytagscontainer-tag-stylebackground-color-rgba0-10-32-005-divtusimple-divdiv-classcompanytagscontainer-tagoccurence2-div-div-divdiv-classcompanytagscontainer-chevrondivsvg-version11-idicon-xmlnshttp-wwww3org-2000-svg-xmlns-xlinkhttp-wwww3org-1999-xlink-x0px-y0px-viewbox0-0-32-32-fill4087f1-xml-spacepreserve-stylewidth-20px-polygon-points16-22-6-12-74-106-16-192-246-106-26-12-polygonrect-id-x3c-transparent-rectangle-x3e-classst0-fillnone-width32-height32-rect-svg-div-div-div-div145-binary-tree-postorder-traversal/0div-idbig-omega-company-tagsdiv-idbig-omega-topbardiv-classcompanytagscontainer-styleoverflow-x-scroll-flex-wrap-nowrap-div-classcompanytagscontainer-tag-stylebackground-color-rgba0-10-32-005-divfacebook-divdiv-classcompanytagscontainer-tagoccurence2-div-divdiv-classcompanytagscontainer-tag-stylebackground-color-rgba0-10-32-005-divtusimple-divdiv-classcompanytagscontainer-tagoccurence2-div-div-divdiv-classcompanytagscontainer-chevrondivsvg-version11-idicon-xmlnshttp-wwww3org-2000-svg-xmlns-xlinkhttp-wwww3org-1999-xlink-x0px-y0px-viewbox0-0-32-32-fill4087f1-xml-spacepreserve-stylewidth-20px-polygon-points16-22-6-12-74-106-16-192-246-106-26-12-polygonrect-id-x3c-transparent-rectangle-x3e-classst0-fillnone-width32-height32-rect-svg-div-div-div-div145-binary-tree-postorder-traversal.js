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
var postorderTraversal = function(root) {
    let res = [];
    
    function pt(root){
        if(root !== null){
            pt(root.left);
            pt(root.right);
            res.push(root.val);
        }
    }
    
    pt(root);
    return res;
};