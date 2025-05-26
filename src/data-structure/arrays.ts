/**
 * @description
 * arrays vs arrayLists (dynamic arrays) vs linkedLists
 */

 /*
 * Arrays in javascript are dynamic arrays by default.
 *
 * An static array has fixed size that when reached, no more elements can be added.
 */

 let staticArray = [10, 20, 30];

 // Try to simulate a static array
 // `length` is blocked to prevent resizing
 Object.defineProperty(staticArray, "length", {
  writable: false
 });

 staticArray.push(40); // ❌ Error cannot push to static array
 staticArray.length = 5; // ❌ Error (length is read-only)


 /*
 * Dynamic arrays.
 * to add at the end (o(1))
 * to add at the beginning (o(n))
 * to add at the middle (o(n))
 *
 * add at the beginning (or any other position besides the end) is worst
 * because it requires shifting all elements to the right.
 */

 const array = [1, 2, 3];

 // push() - add to the end (O(1))
 array.push(4); // [1, 2, 3, 4]
 array.push(5, 6); // [1, 2, 3, 4, 5, 6]

 // unshift() - add to the beginning (O(n))
 array.unshift(0); // [0, 1, 2, 3, 4, 5, 6]
 array.unshift(-1, -2); // [-1, -2, 0, 1, 2, 3, 4, 5, 6]

 // splice() - insert/remove at any position (O(n))
 array.splice(2, 0, 99); // insert "99" at index 2
 // [-1, -2, 99, 0, 1, 2, 3, 4, 5, 6]

console.log(array[2]); // 99 (O(1) - fast access)
console.log(array.includes(99)); // true (O(n))
console.log(array.indexOf(99)); // 2 (returns index or -1)

/**
* linkedLists (singly or doubly)
* Insert at the beginning is better because is o(1) because it only requires updating the head pointer.
* no need to shift elements to the right.
*/
