class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        // converting them into charcodes first
        let charCodesFirst = [];
        let charCodesSecond = [];
        for (let i = 0; i < s.length; i++) {
            charCodesFirst.push(s[i].charCodeAt(0));
            charCodesSecond.push(t[i].charCodeAt(0));
        }

        // sorting them based on numbers
        charCodesFirst.sort();
        charCodesSecond.sort();

        // convert them back to strings as they should look same if anagram
        let first = '';
        let second = '';

        for (let i = 0; i < s.length; i++) {
            first = first + String.fromCharCode(charCodesFirst[i]);
            second = second + String.fromCharCode(charCodesSecond[i]);
        }

        if (first === second) {
            return true;
        }

        return false;
    }
}
