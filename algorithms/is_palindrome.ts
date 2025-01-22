import { LinkedList, LinkedListNode } from '../linked_list';

function isPalindrome<T>(list: LinkedList<T>): boolean {
    if (!list.head) return true;

    let slow: LinkedListNode<T> | null = list.head;
    let fast: LinkedListNode<T> | null = list.head;
    const stack: T[] = [];

    while (fast && fast.next) {
        stack.push(slow!.value);
        slow = slow!.next;
        fast = fast.next.next;
    }

    if (fast) {
        slow = slow!.next;
    }

    while (slow) {
        const top = stack.pop();
        if (top !== slow.value) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}

// Test case
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(1);

console.log(isPalindrome(linkedList)); // Output: true
