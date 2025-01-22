import { TreeNode } from '../tree';
import { ListNode } from '../list';

function convertTreeToList<T>(root: TreeNode<T> | null): ListNode<T> | null {
    if (!root) {
        return null;
    }

    const dummyHead = new ListNode<T>(root.value);
    let currentListNode = dummyHead;
    const queue: Array<TreeNode<T>> = [root];

    while (queue.length > 0) {
        const currentTreeNode = queue.shift()!;
        if (currentTreeNode.left) {
            currentListNode.next = new ListNode<T>(currentTreeNode.left.value);
            currentListNode = currentListNode.next;
            queue.push(currentTreeNode.left);
        }
        if (currentTreeNode.right) {
            currentListNode.next = new ListNode<T>(currentTreeNode.right.value);
            currentListNode = currentListNode.next;
            queue.push(currentTreeNode.right);
        }
    }

    return dummyHead;
}

// Test case
const root = new TreeNode<number>(1);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(3);
root.left.left = new TreeNode<number>(4);
root.left.right = new TreeNode<number>(5);

const list = convertTreeToList(root);
let current = list;
while (current) {
    console.log(current.value);
    current = current.next;
}
