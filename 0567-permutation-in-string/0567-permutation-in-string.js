var checkInclusion = function (s1, s2) {
    
    if(s1.length > s2.length) return false;
    let s1Count = Array(26).fill(0)
    let s2Count = Array(26).fill(0)
    
    
    for(let i = 0;  i < s1.length; i++){
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
    }
    
    
    let matches = 0
    
    for(let i = 0; i < 26; i++){
        if(s1Count[i] === s2Count[i]) matches += 1
    }
    
    let left = 0
    
    for(let right = s1.length; right < s2.length; right++){
        if(matches === 26) return true;
        
        let index = s2.charCodeAt(right) - 'a'.charCodeAt(0)
        s2Count[index] += 1;
        
        if(s1Count[index] === s2Count[index]){
            matches += 1
        } else if(s1Count[index] + 1 === s2Count[index]){
            matches -= 1
        }
        
        index = s2.charCodeAt(left) - 'a'.charCodeAt(0)
        s2Count[index] -= 1
        
        if(s1Count[index] === s2Count[index]){
            matches += 1
        } else if(s1Count[index] - 1 === s2Count[index]){
            matches -= 1
        }
        
        left++;
    }
    
    return matches === 26
};