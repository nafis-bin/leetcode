class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let ans = ''
        for (let i = 0; i < strs.length; i++) {
            ans += btoa(strs[i]) + '||'
        }

        return ans.slice(0, ans.length - 2)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let words = str.split('||')

        let ans = []
        let uncodedWord = ''
        for (let i = 0; i < words.length; i++) {
            uncodedWord = atob(words[i])
            ans = [...ans, uncodedWord]
        }

        return ans
    }
}
