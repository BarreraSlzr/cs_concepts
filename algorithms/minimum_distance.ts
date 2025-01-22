import { TreeNode } from '../tree';

function minimumDistance(root: TreeNode<number> | null): number {
    if (!root) return 0;

    let minDistance = Infinity;
    let prev: TreeNode<number> | null = null;

    function inorder(node: TreeNode<number> | null) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            minDistance = Math.min(minDistance, node.value - prev.value);
        }
        prev = node;

        inorder(node.right);
    }

    inorder(root);
    return minDistance;
}

// Test case
const root = new TreeNode<number>(4);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(6);
root.left.left = new TreeNode<number>(1);
root.left.right = new TreeNode<number>(3);

console.log(minimumDistance(root)); // Output: 1
