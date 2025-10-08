class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        let base = "a".charCodeAt(0);
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - base] += 1
            count2[s2.charCodeAt(i) - base] += 1
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) {
                matches++;
            }
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true
            }

            let rIdx = s2.charCodeAt(r) - base

            count2[rIdx] += 1
            if (count1[rIdx] === count2[rIdx]) {
                matches += 1
            } else if (count1[rIdx] === count2[rIdx] - 1) {
                matches -= 1
            }

            let lIdx = s2.charCodeAt(l) - base
            count2[lIdx] -= 1
            if (count1[lIdx] === count2[lIdx]) {
                matches += 1
            } else if (count1[lIdx] === count2[lIdx] + 1) {
                matches -= 1
            }

            l++


        }
        
        return matches === 26


    }
}

