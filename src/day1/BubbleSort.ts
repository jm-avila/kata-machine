export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        let movedSomeItem = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                movedSomeItem = true;
            }
        }
        if (!movedSomeItem) {
            break;
        }
    }
}

// export default function bubble_sort(arr: number[]): void {
//     let maxIndex = arr.length;
//     while (true) {
//         let movedSomeItem = false;
//         for (let i = 0; i < maxIndex - 1; i++) {
//             const currentItem = arr[i];
//             const nextItem = arr[i + 1];
//             if (currentItem > nextItem) {
//                 arr[i] = nextItem;
//                 arr[i + 1] = currentItem;
//                 movedSomeItem = true;
//             }
//         }
//         if (movedSomeItem) {
//             maxIndex -= 1;
//         } else {
//             break;
//         }
//     }
// }
