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
var inorderTraversal = function(root) {
    let space = [];
    inorder(root)
   function inorder(root){ 
       if(root!= null){
        inorder(root.left);
        space.push(root.val);
        inorder(root.right);
    }
   }
    return space;
};