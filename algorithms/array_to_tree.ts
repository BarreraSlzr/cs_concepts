import { TreeNode } from '../tree';

function arrayToTree(arr: number[]): TreeNode<number> | null {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue: TreeNode<number>[] = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift()!;
        if (i < arr.length) {
            current.left = new TreeNode(arr[i++]);
            queue.push(current.left);
        }
        if (i < arr.length) {
            current.right = new TreeNode(arr[i++]);
            queue.push(current.right);
        }
    }

    return root;
}

// Test case
const arr = [1, 2, 3, 4, 5, 6, 7];
const tree = arrayToTree(arr);
console.log(JSON.stringify(tree));
