/**
 * 
 *   从中序和后序遍历序列构造二叉树
    根据一棵树的前序遍历与中序遍历构造二叉树。

    注意:
    你可以假设树中没有重复的元素。

    例如，给出

    前序遍历 preorder = [3,9,20,15,7]
    中序遍历 inorder = [9,3,15,20,7]
    返回如下的二叉树：

        3
      / \
      9  20
        /  \
      15   7
 * @param {*} val 
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
  if (inorder.length === 0 || !inorder) return null;

  var r = postorder.pop();
  var root = new TreeNode(r);

  var ii = inorder.indexOf(r);

  var il = inorder.slice(0, ii);
  var ir = inorder.slice(ii + 1);

  if (il.length === 1) {
    root.left = new TreeNode(il[0]);
  } else {
    var pl = postorder.slice(0, ii);
    root.left = buildTree(il, pl);
  }

  if (ir.length === 1) {
    root.right = new TreeNode(ir[0]);
  } else {
    var pr = postorder.slice(ii);
    root.right = buildTree(ir, pr);
  }

  return root;
};

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
