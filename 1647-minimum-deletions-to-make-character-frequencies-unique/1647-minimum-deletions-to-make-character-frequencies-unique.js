/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let freq = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++){
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    freq.sort((a,b) => a-b);
              
    let del = 0;
              
    for(let i = 24; i >= 0; i--){
        if(freq[i] === 0){
            break;
        }
        
        if(freq[i] >= freq[i+1]){
            let prev = freq[i];
            freq[i] = Math.max(0, freq[i+1] - 1);
            del += prev - freq[i];
        }
    }
return del;
};