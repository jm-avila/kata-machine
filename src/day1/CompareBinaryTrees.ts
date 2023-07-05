function compareRecursive(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.value !== b.value) return false;
    return (
        compareRecursive(a.left, b.left) && compareRecursive(a.right, b.right)
    );
}

export function compareIterative(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    const aQ: (BinaryNode<number> | null | undefined)[] = [a];
    const bQ: (BinaryNode<number> | null | undefined)[] = [b];

    while (aQ.length && bQ.length) {
        const aNode = aQ.shift();
        const bNode = bQ.shift();

        if (!aNode && !bNode) continue;
        if (aNode?.value !== bNode?.value) {
            return false;
        }

        aQ.push(aNode?.left);
        aQ.push(aNode?.right);

        bQ.push(bNode?.left);
        bQ.push(bNode?.right);
    }

    return aQ.length === bQ.length;
}

export default compareIterative;
