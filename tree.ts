class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Example:
const root = new TreeNode<number>(1);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(3);
root.left.left = new TreeNode<number>(4);
root.left.right = new TreeNode<number>(5);
