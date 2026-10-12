/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MyDeque {
    constructor() {
        this.item = [];
        this.head = 0;
    }

    addLast(element) {
        this.item.push(element);
    }

    removeLast() {
        if (this.isEmpty()) return null;
        return this.item.pop();
    }

    removeFirst() {
        if (this.isEmpty()) return null;
        return this.item[this.head++];
    }

    peekFront() {
        if (this.isEmpty()) return null;
        return this.item[this.head];
    }

    peekEnd() {
        if (this.isEmpty()) return null;
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        return this.head >= this.item.length;
    }
}

const maxSlidingWindow = function(nums, k) {
    const deque = new MyDeque();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        while (!deque.isEmpty() && nums[deque.peekEnd()] < nums[i]) {
            deque.removeLast();
        }
        deque.addLast(i);

        if (deque.peekFront() < i - k + 1) {
            deque.removeFirst();
        }

        if (i >= k - 1) {
            result.push(nums[deque.peekFront()]);
        }
    }
    return result;
};