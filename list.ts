export class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

// Example usage:
const head = new ListNode<number>(1);
head.next = new ListNode<number>(2);
head.next.next = new ListNode<number>(3);
