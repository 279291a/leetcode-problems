/**
 * 填充每个节点的下一个右侧节点指针
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * 思路：利用层级遍历，找出每一层的遍历顺序，
 * 节点的next 指针指向节点所在层的下一个节点，如果不存在，则指向null
 */
var connect = function(root) {
  if (!root) return null;

  const queue = [root];
  let cur;
  let level;

  while (queue.length) {
    level = queue.length;
    let i = 0;
    const temp = [];

    while (i++ < level) {
      cur = queue.shift();

      temp.push(cur);

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    temp.forEach((v, k) => {
      v.next = temp[k + 1] || null;
    });
  }

  return root;
};

/**
 * 思路: 递归
 */
// const findNext = (target, p = null) => {
//   if (!target) return null;
//   if (target === p.left) {
//     if (p.right) {
//       return p.right;
//     }
//   }

//   if (p.next) {
//     return p.next.left || p.next.right;
//   }

//   return null;
// };

// var connect = function(root, p = null) {
//   if (!root) return null;

//   root.next = findNext(root);

//   if(root.left) {
//     root.left.next = findNext(root.left,root)

//   }
// };
