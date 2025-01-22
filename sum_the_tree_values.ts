import { TreeNode } from './tree';

function sumTreeValues(root: TreeNode<number> | null): number {
    if (root === null) {
        return 0;
    }
    return root.value + sumTreeValues(root.left) + sumTreeValues(root.right);
}

// Test case
const root = new TreeNode<number>(1);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(3);
root.left.left = new TreeNode<number>(4);
root.left.right = new TreeNode<number>(5);

console.log(sumTreeValues(root)); // Output: 15
