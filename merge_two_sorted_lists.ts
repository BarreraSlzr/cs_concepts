import { LinkedList, LinkedListNode } from './linked_list';

function mergeTwoSortedLists<T>(l1: LinkedListNode<T> | null, l2: LinkedListNode<T> | null): LinkedListNode<T> | null {
    const dummyHead = new LinkedListNode<T>(null as any);
    let current = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummyHead.next;
}

// Test case
const list1 = new LinkedList<number>();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList<number>();
list2.append(2);
list2.append(4);
list2.append(6);

const mergedList = mergeTwoSortedLists(list1.head, list2.head);
let current = mergedList;
while (current) {
    console.log(current.value); // Output should be 1, 2, 3, 4, 5, 6
    current = current.next;
}
