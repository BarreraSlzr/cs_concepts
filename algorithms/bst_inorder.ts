import { TreeNode } from '../tree';

function bstInorder<T>(root: TreeNode<T> | null): T[] {
    const result: T[] = [];
    function inorder(node: TreeNode<T> | null) {
        if (!node) return;
        inorder(node.left);
        result.push(node.value);
        inorder(node.right);
    }
    inorder(root);
    return result;
}

// Test case
const root = new TreeNode<number>(4);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(6);
root.left.left = new TreeNode<number>(1);
root.left.right = new TreeNode<number>(3);

console.log(bstInorder(root)); // Output: [1, 2, 3, 4, 6]
