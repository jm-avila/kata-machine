function search(node: BinaryNode<number> | null, needle: number): boolean {
    if (!node) return false;

    if (node.value === needle) return true;

    if (node.value > needle) {
        return search(node.left, needle);
    } else {
        return search(node.right, needle);
    }
}

export function dfsRecursive(
    head: BinaryNode<number>,
    needle: number,
): boolean {
    return search(head, needle);
}

export function dfsIterative(
    head: BinaryNode<number>,
    needle: number,
): boolean {
    const q: (BinaryNode<number> | null)[] = [head];
    while (q.length) {
        const node = q.shift();
        if (!node) return false;

        if (node.value === needle) return true;

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }
    return false;
}

export default dfsRecursive;
