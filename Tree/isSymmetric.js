/**
 *   对称二叉树
  给定一个二叉树，检查它是否是镜像对称的。

  例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

      1
    / \
    2   2
  / \ / \
  3  4 4  3
  但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

      1
    / \
    2   2
    \   \
    3    3
  说明:

  如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代解法：
 * 层级遍历，如果每一层的值组成的数组与其逆序相同，则为镜像对称
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;

  const queue = [root];
  var temp = [];
  let cur;
  let level;

  while (queue.length) {
    level = queue.length;
    let i = 0;
    temp = [];

    while (i++ < level) {
      cur = queue.shift();
      if (cur) {
        temp.push(cur.val);
        queue.push(cur.left || null);
        queue.push(cur.right || null);
      } else {
        temp.push(null);
      }
    }

    if (temp.join() !== temp.reverse().join()) {
      return false;
    }
  }
  return true;
};
