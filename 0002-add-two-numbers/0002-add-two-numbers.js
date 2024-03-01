/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let t1 = l1, t2 = l2;
    let dummyNode = new ListNode(-1);
    let curr = dummyNode, carry = 0, sum = 0;
    
    while(t1 !== null || t2 !== null){
        sum = carry;
        if(t1) sum = sum + t1.val;
        if(t2) sum = sum + t2.val;
        
        let newNode = new ListNode(sum%10);
        carry = parseInt(sum/10);
        
        curr.next = newNode;
        curr = curr.next;
        if(t1) t1 = t1.next;
        if(t2) t2 = t2.next;
    }
    
    if(carry){
        let newNode = new ListNode(carry);
        curr.next = newNode;
    }
    
    return dummyNode.next;
};