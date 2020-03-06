/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *
 * @param {ListNode} head
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;

  let fast = head;
  let slow = head;

  while (fast !== slow) {
    if (!fast || !fast.next) return null;

    fast = fast.next.next;
    slow = slow.next;
  }

  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

var detectCycle = function(head) {
  let fast = head;
  let slow1 = head;
  while (true) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow1 = slow1.next;
    if (slow1 === fast) {
      break;
    }
  }
  fast = head; // 将fast重置为新的慢指针
  while (fast !== slow1) {
    fast = fast.next;
    slow1 = slow1.next;
  }
  return fast;
};
