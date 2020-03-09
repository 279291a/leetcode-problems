/**
 * 给定一个二叉树，返回它的中序 遍历。

  示例:

  输入: [1,null,2,3]
    1
      \
      2
      /
    3

  输出: [1,3,2]
  进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
      ]
    : [];
};

/**
 *
 * @param {*} root
 */

var inorderTraversal2 = function(root) {
  const res = [];
  const arr = [];

  if (!root) return [];

  let cur = root;
  while (cur || arr.length !== 0) {
    while (cur) {
      arr.push(cur);
      cur = cur.left;
    }

    cur = arr.pop();
    res.push(cur.val);
    cur = cur.right;
  }

  return res;
};
