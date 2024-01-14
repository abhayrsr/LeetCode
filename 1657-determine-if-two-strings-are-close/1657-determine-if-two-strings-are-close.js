/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    
    for(let i = 0; i < word1.length; i++){
        arr1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for(let i = 0; i < word2.length; i++){
        arr2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    for(let i = 0; i < arr1.length; i++){
        if((arr1[i] > 0 && arr2[i] === 0) || (arr1[i] === 0 && arr2[i] > 0)){
            return false;
        }
    }
    
    return (arr1.sort((a,b) => a-b).join('') === arr2.sort((a,b) => a-b).join(''))
};