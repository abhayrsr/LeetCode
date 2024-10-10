/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0, max = 0;
    let visited = {}
    
    while(right < s.length){
        const char = s.charAt(right);
        visited[char] = visited[char] ? visited[char] + 1 : 1;
       
        // if(visited[char] > max) max = visited[char];
        max = Math.max(visited[char], max)
        
        while((right - left + 1) - max > k){
            visited[s.charAt(left)]--;
            left++;
        }
        
        right++
    }
    
    return right - left;
    
};