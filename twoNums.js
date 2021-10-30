/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head;
    let prev;
    let tens = 0;
    while (l1 || l2) {
        if (l1 && l2) {
            let currNum = tens + l1.val + l2.val;
            if (currNum > 9) {
                tens = Math.floor(currNum / 10);
            } else {
                tens = 0;
            }
            let node = new ListNode(currNum - (tens * 10));
            if (head === undefined) {
                head = node;
            } else {
                prev.next = node;
            }
            prev = node;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            let node;
            if (tens) {
                let currNum = l1.val + tens;
                if (currNum > 9) {
                    tens = Math.floor(currNum / 10);
                } else {
                    tens = 0;
                }
                node = new ListNode(currNum - (tens * 10));
            } else {
                node = new ListNode(l1.val);
            }
            prev.next = node;
            prev = node;
            l1 = l1.next;
        } else {
            let node;
            if (tens) {
                let currNum = l2.val + tens;
                if (currNum > 9) {
                    tens = Math.floor(currNum / 10);
                } else {
                    tens = 0;
                }
                node = new ListNode(currNum - (tens * 10));
            } else {
                node = new ListNode(l2.val);
            }
            prev.next = node;
            prev = node;
            l2 = l2.next;
        }
    }
    if (tens) {
        let node = new ListNode(tens);
        prev.next = node;
    }
    return head;
};