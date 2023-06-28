export default class Stack<T> {
    public length: number = 0;
    public head?: Node<T>;

    push(item: T): void {
        const node = new Node(item);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) {
            return;
        }
        const head = this.head;
        this.head = this.head.next;
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
