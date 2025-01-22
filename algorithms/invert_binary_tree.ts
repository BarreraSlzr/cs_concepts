import { TreeNode } from '../tree';

function invertBinaryTree<T>(root: TreeNode<T> | null): TreeNode<T> | null {
    if (root === null) {
        return null;
    }

    const left = invertBinaryTree(root.left);
    const right = invertBinaryTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

// Test case
const root = new TreeNode<number>(4);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(7);
root.left.left = new TreeNode<number>(1);
root.left.right = new TreeNode<number>(3);
root.right.left = new TreeNode<number>(6);
root.right.right = new TreeNode<number>(9);

const invertedTree = invertBinaryTree(root);
console.log(JSON.stringify(invertedTree));
