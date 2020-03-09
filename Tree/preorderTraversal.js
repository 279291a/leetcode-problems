/**
 * 给定一个二叉树，返回它的 前序 遍历。

  示例:

  输入: [1,null,2,3]  
    1
      \
      2
      /
    3 

  输出: [1,2,3]
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

/**
 * 递归
 */
var preorderTraversal = function(root) {
  if (root === null) return;

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right)
  ];
};

/**
 * 迭代
 */

var preorderTraversal2 = function(root) {
  const res = [];
  const arr = [];

  root && arr.push(root);

  while (arr.length > 0) {
    const cur = arr.pop();

    res.push(cur.val);

    cur.right && arr.push(cur.right);
    cur.left && arr.push(cur.left);
  }

  return res;
};
