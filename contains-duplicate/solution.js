class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupsArr = [];

        for (let i = 0; i < nums.length; i++) {
            if (dupsArr[nums[i]] === true) {
                return true;
            }

            dupsArr[nums[i]] = true;
        }

        return false;
    }
}
