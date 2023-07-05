export default class MinHeap {
    public length: number = 0;
    public data: number[] = [];

    constructor() {}

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }

        const parentIndex = this.parent(idx);
        const parentValue = this.data[parentIndex];
        const currentValue = this.data[idx];

        if (parentValue > currentValue) {
            this.data[parentIndex] = currentValue;
            this.data[idx] = parentValue;
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const leftIndex = this.leftChild(idx);
        const rightIndex = this.rightChild(idx);

        if (leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.data[rightIndex] = value;
            this.data[idx] = rightValue;
            return this.heapifyDown(rightIndex);
        }

        if (rightValue > leftValue && value > leftValue) {
            this.data[leftIndex] = value;
            this.data[idx] = leftValue;
            return this.heapifyDown(leftIndex);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
