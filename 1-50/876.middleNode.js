/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
  if (!head) return null;
  let cur = head;
  const arr = [];

  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }

  const mid = Math.round(length / 2);

  return arr[mid];
};
