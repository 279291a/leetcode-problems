/**
 *   二叉树的最近公共祖先
 * 
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
  示例 1:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
  输出: 3
  解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
  示例 2:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
  输出: 5
  解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 */
/**
 * 待实现思路：
 * 1. 确定p,q 所在层数
 * 2. 如果高度相同，判断两个节点是否为同一节点，如果是则为最近公共祖先结点
 * 3. 如果高度不同，递归查询高度较低节点的父节点，直到父节点的高度与另一节点高度相同，再次重复步骤2
 * 4. 如果高度相同，不是同一节点，递归向上，查询两个节点的父节点，重复步骤2
 */

/**
 *
 * @param {*} root
 * @param {*} p
 * @param {*} q
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === q || root === p) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
};

const root = levelOrder(three);
lowestCommonAncestor(root, 9, 7);
