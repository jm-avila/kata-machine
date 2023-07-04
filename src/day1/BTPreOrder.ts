type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

function traverse(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;
    // Pre
    path.push(node.value);

    // Recurse
    traverse(node.left, path);
    traverse(node.right, path);

    // Post

    return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
