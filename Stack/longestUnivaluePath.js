/**
 * 给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。

示例 1:

输入:

              5
             / \
            4   5
           / \   \
          1   1   5
输出:

2
示例 2:

输入:

              1
             / \
            4   5
           / \   \
          4   4   5
输出:

2
注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-univalue-path
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var longestUnivaluePath = function(root) {
  if (!root || (!root.right && !root.left)) return 0;

  while (root.right === null && root.left != null) {
    const right = root.right;
    const left = root.left;

    console.log(root, right, left);

    if (root.val === right.val || root.val === left.val) {
      return (
        Math.max(longestUnivaluePath(right), longestUnivaluePath(left)) + 1
      );
    } else {
      return Math.max(longestUnivaluePath(right), longestUnivaluePath(left));
    }
  }
  return 0;
};
