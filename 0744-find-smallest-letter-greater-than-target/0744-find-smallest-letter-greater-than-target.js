/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    let set = new Set(letters);
    for(let key of set){
        if (key > target) return key;
    }
    
    return letters[0];
};