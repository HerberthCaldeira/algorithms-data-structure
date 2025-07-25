class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    let sett = new Set(nums);
    return sett.size !== nums.length;
  }
}

const solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 3]));
