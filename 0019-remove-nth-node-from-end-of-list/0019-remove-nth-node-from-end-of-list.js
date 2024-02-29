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
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    
    let prev = dummyNode, result = dummyNode;
    let remove = head, tail = head;
    for(let i = 0; i < n; i++){
        tail = tail.next;
    }
    
    while(tail){
        prev = prev.next;
        remove = remove.next;
        tail = tail.next;
    }
    prev.next = remove.next;
    return result.next
};