/**
 * Works only with sorted array
 * @param nums (should be sorted)
 * @param target
 * @returns
 */
function twoSumTwoPointer(nums: number[], target: number): number[] {

    let left = 0, right = nums.length -1;

    while(left < right) {
      if (left == right) return [];

      let sum = nums[left] + nums[right];

      if (sum == target) return [nums[left], nums[right]];

      if (sum < target) left++;

      if (sum > target) right--;

    }
};

/**
 * Works with unsorted AND sorted array
 * @param nums
 * @param target
 * @returns
 */
function twoSumForUnsorted(nums: number[], target: number): number[] {
  let setMap = new Set();

  for (let i = 0; i < nums.length; i++){
    let difference = target - nums[i];
    if(setMap.has(difference)) {
      let key = nums.indexOf(difference)
      return [key, i];
    }
    setMap.add(nums[i])
  }
}

/**
 * Works with unsorted AND sorted array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
  console.log(nums);
  let map = new Map();
  for (let i = 0; i <= nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(nums[i], i);
    console.log(map);
  }
  return [];
}

export {twoSum, twoSumTwoPointer, twoSumForUnsorted}
