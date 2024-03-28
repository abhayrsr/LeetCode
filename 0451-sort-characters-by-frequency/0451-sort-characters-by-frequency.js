/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    let res = "";
    
    for(let i = 0; i < s.length; i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i), map.get(s.charAt(i))+1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }
    
    let sortedArray = Array.from(map);
    sortedArray.sort((a,b) => b[1] - a[1]);
    
    for(let i = 0; i < sortedArray.length; i++){
        while(sortedArray[i][1] !== 0){
            res+=sortedArray[i][0];
            sortedArray[i][1]--;
        }
    }
    
    return res;
};