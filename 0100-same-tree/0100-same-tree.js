/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return traverse(p,q)
};

function traverse(p,q){
    if(p === null && q === null ){
        return true;
    }
    
    if((p !== null && q == null) || (q !== null && p == null)){
        return false
        
    }
    
    if(p.val !== q.val){
        return false
        
    }
    
    let result1 = traverse(p.left, q.left)
    let result2 = traverse(p.right, q.right)
    
    return result1 && result2
}

