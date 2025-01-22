class LinkedListNode {
    value: number;
    next: LinkedListNode | null;

    constructor(value: number, next: LinkedListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: LinkedListNode | null;

    constructor() {
        this.head = null;
    }

    append(value: number) {
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
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);