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
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;

    let curr = head;
    let prev = null;
    head = head.next;

    while (curr !== null) {
        let next = curr.next;

        if (next !== null) {
            curr.next = next.next;
            next.next = curr;

            if (prev !== null) prev.next = next;

            prev = curr;
            curr = curr.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};