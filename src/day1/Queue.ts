export default class Queue<T> {
    public length: number = 0;
    public head?: Node<T>;
    public tail?: Node<T>;

    enqueue(item: T): void {
        const node = new Node(item);

        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail = this.tail.next = node;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }

        const head = this.head;

        if (this.length === 1) {
            this.head = this.tail = undefined;
        } else {
            this.head = this.head.next;
        }
        this.length--;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

class Node<T> {
    public next?: Node<T>;
    constructor(public value: T) {}
}
