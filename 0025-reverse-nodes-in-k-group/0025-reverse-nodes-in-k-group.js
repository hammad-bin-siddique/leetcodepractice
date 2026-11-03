/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/** @param {ListNode} head @param {number} k @return {ListNode} */
var reverseKGroup = function(head, k) {
    if (k === 1) return head;
    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        let kth = groupPrev;
        for (let i = 0; i < k && kth !== null; i++) kth = kth.next;
        if (kth === null) break;

        const groupNext = kth.next;
        const first = groupPrev.next;
        let prev = groupNext;
        let curr = first;
        while (curr !== groupNext) {
            const nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        groupPrev.next = kth;
        groupPrev = first;
    }
    return dummy.next;
};