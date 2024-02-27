/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let dummy = head;
    let first = null, second = head;
    
    while(second){
        let temp = second.next;
        second.next = first;
        first = second;
        first.next = second.next;
        dummy = first;
        second = temp;
    }
    return dummy;
};