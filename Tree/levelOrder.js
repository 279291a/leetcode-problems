/**
 * 
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

  例如:
  给定二叉树: [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：

  [
    [3],
    [9,20],
    [15,7]
  ]
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
 * @return {number[][]}
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
 * @return {number[][]}
 */
/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function(root) {
  if (!root) return [];

  const queue = [];
  const res = [];
  let cur;
  let temp = [];

  queue.push(root);

  while (queue.length) {
    const level = queue.length;
    let i = 0;

    temp = [];

    while (i++ < level) {
      cur = queue.shift();
      temp.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    res.push(temp);
  }

  return res;
};

const three = new TreeNode(3);
three.left = new TreeNode(9);
const twenty = new TreeNode(20);
twenty.left = new TreeNode(15);
twenty.right = new TreeNode(7);
three.right = twenty;

console.log(levelOrder(three));
