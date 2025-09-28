class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s
                    .split('')
                    .filter(v => /^[A-Za-z0-9]$/.test(v))
                    .join('')
                    .toLowerCase()

        
        let i = 0
        let j = text.length - 1
        while (i < j) {
            if (text[i] !== text[j]) {
                return false
            }
            i += 1
            j -= 1
        }

        return true
        
    }
}

