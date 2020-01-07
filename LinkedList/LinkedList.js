/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;

  let quick = head.next;
  let slow = head;

  while (quick !== slow) {
    if (!quick || !quick.next) return false;

    quick = quick.next.next;
    slow = slow.next;
  }

  return true;
};
