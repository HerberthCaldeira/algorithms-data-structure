class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    let countS: { [key: string]: number } = {};
    let countT: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (let key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }

    return true;
  }

  isAnagramSimpleSolution(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
}

const s = new Solution();

console.log(s.isAnagram("anagram", "nagaram"));
