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
const deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head); 
    let prev = dummy; 
    let current = head;

    while(current) {
        if(current.next && current.val === current.next.val) {
            const dupVal = current.val; 

            while(current && current.val === dupVal) {
                current = current.next;
            }
            prev.next = current;
        }

        else {
            prev = current;
            current = current.next; 
        }
    }

    return dummy.next;
};