export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const current = q.shift() as number;
        if (current === needle) {
            break;
        }

        const adjacency = graph[current];
        for (let i = 0; i < adjacency.length; i++) {
            if (adjacency[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = current;

            q.push(i);
        }
        seen[current] = true;
    } while (q.length);

    let current = needle;
    const out: number[] = [];

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }
    return null;
}
