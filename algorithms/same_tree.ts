import { TreeNode } from '../tree';

function sameTree<T>(p: TreeNode<T> | null, q: TreeNode<T> | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    return p.value === q.value && sameTree(p.left, q.left) && sameTree(p.right, q.right);
}

// Test case
const tree1 = new TreeNode<number>(1);
tree1.left = new TreeNode<number>(2);
tree1.right = new TreeNode<number>(3);

const tree2 = new TreeNode<number>(1);
tree2.left = new TreeNode<number>(2);
tree2.right = new TreeNode<number>(3);

const tree3 = new TreeNode<number>(1);
tree3.left = new TreeNode<number>(2);
tree3.right = new TreeNode<number>(4);

console.log(sameTree(tree1, tree2)); // true
console.log(sameTree(tree1, tree3)); // false
