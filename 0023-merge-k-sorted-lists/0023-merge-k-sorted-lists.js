/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(null);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    }
    else {
        current.next = list2;
    }

    return dummy.next;
}
const mergeKLists = function (lists) {
    let result = null;
    for(let k = 0; k < lists.length; k++) {
        let current = lists[k];
        result = mergeTwoLists(result, current);
    }

    return result;
};