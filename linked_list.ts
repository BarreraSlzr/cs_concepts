export class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;

    constructor(value: T, next: LinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList<T> {
    head: LinkedListNode<T> | null;

    constructor() {
        this.head = null;
    }

    append(value: T) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = new LinkedListNode(value);
    }
}

// Example usage:
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
