import { TreeNode } from './tree';

function getMinimumDifference(root: TreeNode<number> | null): number {
    let minDiff = Infinity;
    let prev: number | null = null;

    function inorder(node: TreeNode<number> | null) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, node.value - prev);
        }
        prev = node.value;

        inorder(node.right);
    }

    inorder(root);
    return minDiff;
}

// Test case
const root = new TreeNode<number>(4);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(6);
root.left.left = new TreeNode<number>(1);
root.left.right = new TreeNode<number>(3);

console.log(getMinimumDifference(root)); // Output: 1
