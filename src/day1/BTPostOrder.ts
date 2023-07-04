type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

function traverse(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) return path;
    // Pre

    // Recurse
    traverse(node.left, path);
    traverse(node.right, path);

    // Post
    path.push(node.value);
    return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
