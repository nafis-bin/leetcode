class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let leftArr = new Array(height.length).fill(0)
        for (let i = 1; i < height.length; i++) {
            leftArr[i] = Math.max(height[i - 1], leftArr[i - 1])
            if (leftArr[i] < 0) {
                leftArr[i] = 0
            }
        }

        let rightArr = new Array(height.length).fill(0)
        for (let j = height.length - 2; j >= 0; j--) {
            rightArr[j] = Math.max(height[j + 1], rightArr[j + 1])
            if (rightArr[j] < 0) {
                rightArr[j] = 0
            }
        }

        let res = 0
        for (let i = 0; i < height.length; i++) {
            let num = Math.min(leftArr[i], rightArr[i]) - height[i]
            if (num > 0) res += num
        }

        return res
    }
}

