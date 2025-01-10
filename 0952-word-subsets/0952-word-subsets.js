/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    let word = new Array(26).fill(0);
    
    for (let w of words2) {
        let temp = new Array(26).fill(0);
        for (let char of w) {
            temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            word[i] = Math.max(word[i], temp[i]);
        }
    }

    let result = [];
    for (let w of words1) {
        let space = new Array(26).fill(0);
        for (let char of w) {
            space[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (space[i] < word[i]) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            result.push(w);
        }
    }

    return result;
};
