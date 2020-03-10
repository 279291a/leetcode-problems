/**
 * 路径总和
 * 
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例: 
 * 给定如下二叉树，以及目标和 sum = 22，

                5
              / \
              4   8
            /   / \
            11  13  4
          /  \      \
          7    2      1
  返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 */

/**
 * 思路：检查叶子是否和给定的target 相同
 * 步骤： 如果给定节点为空 ，返回false
 *  如果给定节点不为空，但是左右节点为空，则检查该叶子节点是否与给定值相同
 *  如果左右节点不为空，则递归查询该左右节点和 target- 节点值 的关系
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    if (sum === root.val) return true;
    return false;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

const z = new TreeNode(1);
z.left = new TreeNode(2);

console.log(hasPathSum(z, 0));
