class Node<T> {
    prev?: Node<T>;
    next?: Node<T>;
    constructor(public value: T) {}
}

export default class DoublyLinkedList<T> {
    public length: number = 0;
    public head?: Node<T>;
    public tail?: Node<T>;

    prepend(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error(
                `Index is out of bounds, current length ${this.length}`,
            );
        }

        if (idx === 0) {
            return this.prepend(item);
        }

        if (idx === this.length) {
            return this.append(item);
        }

        this.length++;
        const current = this.getAt(idx);
        const node = new Node(item);

        node.next = current;
        node.prev = current.prev;
        current.prev = node;

        if (node.prev) {
            node.prev.next = current;
        }
    }
    append(item: T): void {
        const node = new Node(item);
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let current = this.head;
        for (let i = 0; current && i < this.length; i++) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }

        if (!current) {
            return;
        }

        return this.removeNode(current);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return;
        }
        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const value = this.head?.value;
            this.head = this.tail = undefined;
            return value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }
        node.prev = node.next = undefined;

        return node.value;
    }

    private getAt(idx: number): Node<T> {
        let current = this.head;
        for (let i = 0; current && i < idx; i++) {
            current = current.next;
        }

        if (!current) {
            throw new Error("Oops something wen't wrong");
        }
        return current;
    }
}
