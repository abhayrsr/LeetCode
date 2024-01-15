/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let result = [[], []];
    let winnerSet = new Set();
    let loserMap = new Map();
    
    for(let i = 0; i < matches.length; i++){
        if(!winnerSet.has(matches[i][0])){
            winnerSet.add(matches[i][0]);
        }
    }
    
    for(let i = 0; i < matches.length; i++){
        if(winnerSet.has(matches[i][1])){
            winnerSet.delete(matches[i][1]);
        }
    }
    
    for(let value of winnerSet){
        result[0].push(value);
    } 
    
    
    for(let i = 0; i < matches.length; i++){
        if(loserMap.has(matches[i][1])){
            loserMap.set(matches[i][1], loserMap.get(matches[i][1]) + 1);
        } else {
            loserMap.set(matches[i][1], 1)
        }
    }
    
    for(let key of loserMap.keys()){
        if(loserMap.get(key) == 1){
            result[1].push(key);
        }
    }
    
    result[0].sort((a,b) => a-b);
    result[1].sort((a,b) => a-b);
    
    return result;
};