/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0;
    
    while(start !== 0 | goal !== 0){
        
        if((start & 1) == 0){
            if((goal & 1) == 1) count++;
        } else {
            if((goal & 1) == 0) count++;
        }
        
        start >>= 1;
        goal >>= 1;
        
    }
    
    return count;
};