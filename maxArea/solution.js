class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length - 1
        let height = -1
        let area = -1
        let curr = -1

        while (i < j) {
            height = Math.min(heights[i], heights[j])
            curr = (j - i) * height
            area = Math.max(curr, area)

            if (heights[i] < heights[j]) {
                i += 1
            } else {
                j -= 1
            }
        }

        return area

    }
}
