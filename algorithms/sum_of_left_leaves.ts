import { TreeNode } from '../tree';

function sumOfLeftLeaves(root: TreeNode<number> | null): number {
    if (!root) return 0;

    let sum = 0;

    function dfs(node: TreeNode<number> | null, isLeft: boolean) {
        if (!node) return;

        if (!node.left && !node.right && isLeft) {
            sum += node.value;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    }

    dfs(root, false);
    return sum;
}

// Test case
const root = new TreeNode<number>(3);
root.left = new TreeNode<number>(9);
root.right = new TreeNode<number>(20);
root.right.left = new TreeNode<number>(15);
root.right.right = new TreeNode<number>(7);

console.log(sumOfLeftLeaves(root)); // Output: 24
