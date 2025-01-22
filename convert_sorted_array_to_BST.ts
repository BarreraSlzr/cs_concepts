import { TreeNode } from './tree';

function convertSortedArrayToBST(arr: number[]): TreeNode<number> | null {
    if (arr.length === 0) return null;

    function helper(start: number, end: number): TreeNode<number> | null {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(arr[mid]);
        node.left = helper(start, mid - 1);
        node.right = helper(mid + 1, end);

        return node;
    }

    return helper(0, arr.length - 1);
}

// Test case
const sortedArray = [-10, -3, 0, 5, 9];
const bst = convertSortedArrayToBST(sortedArray);
console.log(JSON.stringify(bst));
