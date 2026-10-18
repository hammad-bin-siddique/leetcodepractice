/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let leftPrev = dummy;

    for (let i = 0; i < left - 1; i++) {
        leftPrev = leftPrev.next;
    }
    let curr = leftPrev.next;

   for(let i = 0; i < right - left; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = leftPrev.next; 
    leftPrev.next = temp;
   }
   return dummy.next;
};