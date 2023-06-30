type Point = {
    x: number;
    y: number;
};

const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

const walk = (
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean => {
    // base case
    // off the map
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }
    // on a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // seen the current tile
    if (seen[current.y][current.x]) {
        return false;
    }
    // pre
    path.push(current);
    seen[current.y][current.x] = true;

    // found end point
    if (current.x === end.x && current.y === end.y) {
        return true;
    }

    // recursion
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        const success = walk(
            maze,
            wall,
            { x: current.x + x, y: current.y + y },
            end,
            seen,
            path,
        );
        if (success) {
            return true;
        }
    }
    // post
    path.pop();
    return false;
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
