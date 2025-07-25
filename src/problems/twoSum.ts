class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
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
}

const solution = new Solution();

console.log(solution.twoSum([2, 7, 11, 15], 26)); //expect: [2, 3]
