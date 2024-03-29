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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    function tree(root, low, high){
        let sum = 0;
        if(root == null) return 0;
        if(root.left) sum += tree(root.left, low, high);
        if(root.val >= low && root.val <= high) sum += root.val;
        if(root.right) sum += tree(root.right, low, high);
        return sum;
    }
    return tree(root, low, high);
};