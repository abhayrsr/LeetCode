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
var averageOfLevels = function(root) {
    let queue = [root];
    let childQueue = [];
    let avg = [];
    let sum = 0;
    
    while(queue.length){
        for(let node of queue){
            sum += node.val;
            if(node.left) childQueue.push(node.left);
            if(node.right) childQueue.push(node.right);
        }
        
        avg.push(sum/queue.length);
        queue = childQueue;
        childQueue = [];
        sum = 0
    }
    return avg;
};