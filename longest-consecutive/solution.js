class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let s = new Set(nums)

        let result = 0
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            let count = 0

            while (s.has(curr)) {
                count += 1
                curr += 1
            }

            result = Math.max(result, count)
        }

        return result
    }
}
