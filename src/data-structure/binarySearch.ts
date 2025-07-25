/**
 * Binary Search
 * Time complexity: O(log n)
 * Space complexity: O(1)
 *
 * @param arr
 * @param target
 * @returns
 */
export default function binarySearch(arr: number[], target: number): number {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1) {
    return arr[0] === target ? 1 : -1;
  }

  let start = 0;
  let end = arr.length;

  console.log(
    `start: ${start}, end: ${end}, midPoint: ${Math.floor(
      start + (end - start) / 2,
    )}, value: ${arr[Math.floor(start + (end - start) / 2)]}`,
  );

  do {
    let midPoint = Math.floor(start + (end - start) / 2);
    let value = arr[midPoint];

    if (value === target) {
      console.log(`Found ${target} at index ${midPoint}`);
      return 1;
    }

    if (value > target) {
      end = midPoint;
    } else {
      start = midPoint + 1;
    }
    console.log(
      `start: ${start}, end: ${end}, midPoint: ${midPoint}, value: ${value}`,
    );
  } while (start < end);

  return -1;
}
