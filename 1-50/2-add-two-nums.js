/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * c1,c2,c3分别表示l1,l2,l3的指针element 表示放到下一位相加的数字
 * 注意链表循环条件
 */
function addTwoNumbers(l1, l2) {
  let c1 = l1,
    c2 = l2;
  let c3,
    l3;

  let element = 0;
  while (c1 || c2 || element) {
    let v1 = 0;
    let v2 = 0;

    if (c1) {
      v1 = c1.val;
      c1 = c1.next;
    }

    if (c2) {
      v2 = c2.val;
      c2 = c2.next;
    }

    const sum = v1 + v2 + element;
    element = Math.floor(sum / 10);

    if (!c3) {
      l3 = new ListNode(sum % 10);
      c3 = l3;
    } else {
      c3.next = new ListNode(sum % 10);
      c3 = c3.next;
    }
  }
  return l3;
}

const a1 = [2, 4, 3];
const b1 = [5, 6, 4];


console.log(addTwoNumbers(a1, b1));
