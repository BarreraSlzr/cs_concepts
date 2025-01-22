import { LinkedList, LinkedListNode } from '../linked_list';

function removeDups<T>(list: LinkedList<T>): void {
    if (!list.head) return;

    const seen = new Set<T>();
    let current: LinkedListNode<T> | null  = list.head;
    let prev: LinkedListNode<T> | null = null;

    while (current) {
        if (seen.has(current.value)) {
            prev!.next = current.next;
        } else {
            seen.add(current.value);
            prev = current;
        }
        current = current.next;
    }
}

// Test case
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);

removeDups(linkedList);

let current = linkedList.head;
while (current) {
    console.log(current.value); // Output should be 1, 2, 3
    current = current.next;
}
