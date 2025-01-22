import { TreeNode } from './tree';

function targetPath(root: TreeNode<number> | null, target: number): number[] | null {
    if (!root) return null;

    function dfs(node: TreeNode<number> | null, currentSum: number, path: number[]): number[] | null {
        if (!node) return null;

        currentSum += node.value;
        path.push(node.value);

        if (!node.left && !node.right && currentSum === target) {
            return path;
        }

        const leftPath = dfs(node.left, currentSum, [...path]);
        if (leftPath) return leftPath;

        const rightPath = dfs(node.right, currentSum, [...path]);
        if (rightPath) return rightPath;

        return null;
    }

    return dfs(root, 0, []);
}

// Test case
const root = new TreeNode<number>(5);
root.left = new TreeNode<number>(4);
root.right = new TreeNode<number>(8);
root.left.left = new TreeNode<number>(11);
root.left.left.left = new TreeNode<number>(7);
root.left.left.right = new TreeNode<number>(2);
root.right.left = new TreeNode<number>(13);
root.right.right = new TreeNode<number>(4);
root.right.right.right = new TreeNode<number>(1);

const target = 22;
const path = targetPath(root, target);
console.log(path); // Output: [5, 4, 11, 2]
