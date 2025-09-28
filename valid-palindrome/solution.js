class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s.split(' ').join('')

        for (let i = 0; i < text.length; i++) {
            if (/^[A-Za-z]$/.test(text[i])) {
                continue
            }

            text = text.slice(i, text.length)
        }

        text = text.toLowerCase()
        
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

