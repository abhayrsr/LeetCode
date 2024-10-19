/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let left = 0, right = 0, max = 0;
    let map = new Map();
    
    while(right < answerKey.length){
        map.set(answerKey[right], (map.get(answerKey[right]) || 0) + 1)
        
        max = Math.max(max, map.get(answerKey[right]))
        
        while((right - left + 1) - max > k){
            map.set(answerKey[left], map.get(answerKey[left]) - 1)
            left++
        }
        
        right++
    }
    
    return right - left;
};