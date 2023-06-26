export default function two_crystal_balls(breaks: boolean[]): number {
    let lenSqrt = Math.floor(Math.sqrt(breaks.length));
    let low = 0;
    let high = breaks.length;

    do {
        const index = low + lenSqrt;
        if (breaks[index] === true) {
            low = index;
            continue;
        }

        for (let i = low; i < high; i++) {
            if (breaks[i]) {
                return i;
            }
        }
        break;
    } while (low < high);
    return -1;
}
