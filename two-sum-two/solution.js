class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let hashMap = {}

        for (let i = 0; i < numbers.length; i++) {
            let lookup = target - numbers[i]

            if (lookup in hashMap) {
                let j = hashMap[lookup]

                if (j < i) {
                    return [j+1, i+1]
                }
                
                return [i+1, j+1]
            }

            hashMap[numbers[i]] = i
        }
    }
}

