/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let l1 = [];
    
    function leaf(root){
        if(root == null) return 0;
        if(root.left == null && root.right == null){
            l1.push(root.val);
        }
        leaf(root.left);
        leaf(root.right);
    }
    
    leaf(root1);
    l1.push("x");
    let p2 = l1.length;
    leaf(root2);
    // console.log(l1);
    
    if(l1.length !== 2*p2 -1) return false;
    
    let p1 = 0;
    
    while(l1[p1] !== 'x'){
        if(l1[p1] !== l1[p2]){
            return false;
        } else {
            p1++;
            p2++;
        }
    }
   
    return true;
    
};