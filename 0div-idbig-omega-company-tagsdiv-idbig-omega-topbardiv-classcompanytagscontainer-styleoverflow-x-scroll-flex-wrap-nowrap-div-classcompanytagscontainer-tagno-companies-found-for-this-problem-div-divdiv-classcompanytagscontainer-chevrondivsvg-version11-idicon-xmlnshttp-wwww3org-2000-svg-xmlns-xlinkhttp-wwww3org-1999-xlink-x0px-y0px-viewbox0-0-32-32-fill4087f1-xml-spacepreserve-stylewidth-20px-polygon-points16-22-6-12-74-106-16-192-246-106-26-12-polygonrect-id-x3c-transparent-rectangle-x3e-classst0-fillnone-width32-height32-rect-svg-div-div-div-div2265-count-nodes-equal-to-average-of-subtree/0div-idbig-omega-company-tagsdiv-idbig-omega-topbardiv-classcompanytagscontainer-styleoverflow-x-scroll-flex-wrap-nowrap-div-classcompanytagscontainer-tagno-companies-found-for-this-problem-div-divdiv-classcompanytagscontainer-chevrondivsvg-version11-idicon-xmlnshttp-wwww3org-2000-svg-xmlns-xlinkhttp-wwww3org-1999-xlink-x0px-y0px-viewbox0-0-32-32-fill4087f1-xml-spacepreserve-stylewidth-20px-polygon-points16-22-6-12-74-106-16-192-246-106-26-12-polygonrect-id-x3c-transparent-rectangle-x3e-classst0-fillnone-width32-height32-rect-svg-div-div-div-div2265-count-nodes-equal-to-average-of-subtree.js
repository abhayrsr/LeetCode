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
var averageOfSubtree = function(root) {
    let result = 0;
    
    function traversal(node){
        if(!node) return [0,0];
        
        const [leftSum, leftCount] = traversal(node.left);
        const [rightSum, rightCount] = traversal(node.right);
        
        const currSum = node.val + leftSum + rightSum;
        const currCount = 1 + leftCount + rightCount;
        
        if(Math.floor(currSum/currCount) == node.val) result++;
        
        return [currSum, currCount];

    }
    
    traversal(root);
    return result;
    
};