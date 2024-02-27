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
var middleNode = function(head) {
    let dummy = head;
    let tot = head, hare = head;
    while(hare && hare.next){
        tot = tot.next;
        hare = hare.next.next;
    }
    return tot
};