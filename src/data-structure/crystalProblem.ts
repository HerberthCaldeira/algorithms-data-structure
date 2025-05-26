/**
 * Crystal Problem
 * You have an array of boolean values where true represents a crystal and false represents no crystal.
 * You want to find the index of the first crystal in the array.
 * Solution: Use a jump search algorithm to find the first crystal in the array.
 * Time complexity: O(√n)
 * @param arr
 * @returns
 */
export default function crystalProblem(arr: boolean[]): number {
  const jump = Math.floor(Math.sqrt(arr.length));

  let i = jump;

  for (; i < arr.length; i += jump) {
    if (arr[i]) {
      break;
    }
  }

  i = i - jump;

  for (; i < arr.length; i++) {
    if (arr[i]) {
      console.log("Cristal found at index: ", i);
      return 1;
    }
  }

  return -1;
}
