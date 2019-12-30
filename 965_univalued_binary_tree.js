/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    return helper(root, root.val);
};

var helper = function (root, val) {
    if (!root) {
        return true;
    }

    if (root.val != val) {
        return false;
    }

    if (!helper(root.left, val) || !helper(root.right, val)) {
        return false;
    }

    return true;
}