import { TreeNode } from './tree';

function mergeTwoBinaryTrees<T>(t1: TreeNode<T> | null, t2: TreeNode<T> | null): TreeNode<T> | null {
    if (!t1) return t2;
    if (!t2) return t1;

    const merged = new TreeNode(t1.value + t2.value);
    merged.left = mergeTwoBinaryTrees(t1.left, t2.left);
    merged.right = mergeTwoBinaryTrees(t1.right, t2.right);

    return merged;
}

// Test case
const tree1 = new TreeNode<number>(1);
tree1.left = new TreeNode<number>(3);
tree1.right = new TreeNode<number>(2);
tree1.left.left = new TreeNode<number>(5);

const tree2 = new TreeNode<number>(2);
tree2.left = new TreeNode<number>(1);
tree2.right = new TreeNode<number>(3);
tree2.left.right = new TreeNode<number>(4);
tree2.right.right = new TreeNode<number>(7);

const mergedTree = mergeTwoBinaryTrees(tree1, tree2);
console.log(JSON.stringify(mergedTree));
