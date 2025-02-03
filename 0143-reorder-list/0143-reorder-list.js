/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let slow = dummyNode, fast = dummyNode;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let start = slow.next, curr = start, prev = null;
    slow.next = null;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    console.log(head, prev);

    let l1 = head, l2 = prev, final = head;

    while(l1 && l2){
        let temp1 = l1.next;
        l1.next = l2;
        let temp2 = l2.next;
        l1 = temp1;
        l2.next = temp1;
        l2 = temp2; 
    }
    
};