/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    
    let remove = head, tail = head;
    let prev = dummyNode, res = dummyNode
    
    for(let i = 0; i < n; i++){
        tail = tail.next
    }
    
    while(tail){
        tail = tail.next
        remove = remove.next
        prev = prev.next
    }
    
    prev.next = remove.next
    
    return dummyNode.next
};