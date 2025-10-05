class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0, maxF = 0, replacable = 0, window = 0, ans = 0
        let countMap = {}

        for (let r = 0; r < s.length; r++) {
            countMap[s[r]] = countMap[s[r]] ? countMap[s[r]] + 1 : 1

            maxF = Math.max(...Object.values(countMap))
            window = r - l + 1

            replacable = window - maxF

            if (replacable <= k) {
                ans = Math.max(ans, window)
            } else {
                countMap[s[l]] -= 1
                l += 1
            }

        }

		return ans
    }
}


let s = new Solution()
console.log(s.characterReplacement("XYYX", 2))
