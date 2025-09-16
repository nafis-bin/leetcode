class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let i = 0; i < strs.length; i++) {
            let word = strs[i];
            let sortedWord = this.sortedAscii(word);

            if (sortedWord in map) {
                map[sortedWord].push(word);
            } else {
                map[sortedWord] = [word];
            }
        }

        let ans = [];
        for (let key in map) {
            ans = [...ans, map[key]];
        }

        return ans;
    }

    /**
     * @param {string} word
     * @return {ans}
     */
    sortedAscii(word) {
        let numArr = [];
        for (let i = 0; i < word.length; i++) {
            numArr.push(word[i].charCodeAt(0));
        }

        numArr.sort();

        let ans = '';
        for (let i = 0; i < numArr.length; i++) {
            ans += String.fromCharCode(numArr[i]);
        }

        return ans;
    }

}
