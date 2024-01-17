/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1);
        else
            map.set(arr[i], 1);
    }
    
    const set = new Set();
    for(const val of map.values()){
        if(set.has(val))
            return false;
        else
            set.add(val);
            
    }
    
    return true;
};
