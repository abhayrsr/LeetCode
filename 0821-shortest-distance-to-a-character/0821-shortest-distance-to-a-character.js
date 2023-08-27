/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const indexOfC = [];
    const output = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            indexOfC.push(i)
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        output[i] = +Infinity;
        for (let j = 0; j < indexOfC.length; j++) {
            if (i === indexOfC[j]) {
                output[i] = 0;
                break;
            } else {
                if (Math.abs(indexOfC[j] - i) > output[i]) break;
                output[i] = Math.min(output[i], Math.abs(indexOfC[j] - i));
            }
        }
    }
    
    return output;
};