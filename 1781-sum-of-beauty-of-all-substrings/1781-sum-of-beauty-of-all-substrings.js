/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let totalBeauty = 0;
    
    for(let i = 0; i < s.length; i++){
        let maxFreq = -Infinity;
        let minFreq = +Infinity;
        let charCount = Array(26).fill(0);
        
        for(let j = i; j < s.length; j++){
           let charIndex = s.charCodeAt(j) - 'a'.charCodeAt(0); // Convert character to index
            charCount[charIndex]++; // Increment the count of the character

            let maxFreq = 0;
            let minFreq = Infinity;

            for (let count of charCount) {
                if (count > 0) {
                    maxFreq = Math.max(maxFreq, count); // Update max frequency
                    minFreq = Math.min(minFreq, count); // Update min frequency
                }
            }

            totalBeauty += maxFreq - minFreq;
        }
    }
    return totalBeauty;
};