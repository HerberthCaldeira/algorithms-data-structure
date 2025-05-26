export default function bubbleSort(arr: number[]): number[] {
  console.log("arr:: ", arr);

  for (let j = 0; j < arr.length; ++j) {
    for (let i = 0; i < arr.length - 1 - j; ++i) { 
      if (arr[i] > arr[i + 1]) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
      console.log(`idx::${i}`, arr);
    }
  }
  return arr;
}
