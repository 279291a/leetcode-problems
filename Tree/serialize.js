/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
  if (!root) return "";

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

      if (cur) {
        temp.push(cur.val);
        queue.push(cur.left);
        queue.push(cur.right);
      } else {
        temp.push(null);
      }
    }

    res.push(temp.toString());
  }

  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;
  const arr = data.split(",");
  let root = new TreeNode(arr.shift());
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();
    const leftVal = arr.shift();

    if (leftVal) {
      cur.left = new TreeNode(leftVal);
      queue.push(cur.left);
    }

    const rightVal = arr.shift();

    if (rightVal) {
      cur.right = new TreeNode(rightVal);
      queue.push(cur.right);
    }
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const three = new TreeNode(1);
three.left = new TreeNode(2);
const twenty = new TreeNode(3);
twenty.left = new TreeNode(4);
twenty.right = new TreeNode(5);
three.right = twenty;

console.log(serialize(three));
