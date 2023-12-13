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
    let arr = [];
    let sum = 0;
    
    function tree(root){
        if(root == null) return;
        tree(root.left);
        arr.push(root.val);
        tree(root.right);
    }
    tree(root);
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= low && arr[i] <= high){
            sum += arr[i];
        }
    }
    return sum;
};