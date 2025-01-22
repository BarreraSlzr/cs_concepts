import { TreeNode } from './tree';

function averageOfLevels(root: TreeNode<number> | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode<number>[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            levelSum += node.value;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelSum / levelSize);
    }

    return result;
}

// Test case
const root = new TreeNode<number>(3);
root.left = new TreeNode<number>(9);
root.right = new TreeNode<number>(20);
root.right.left = new TreeNode<number>(15);
root.right.right = new TreeNode<number>(7);

console.log(averageOfLevels(root)); // Output: [3, 14.5, 11]
