/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0
    
    for(let i = 0; i < words.length; i++){
        let pre = ''
        for(let j = 0; j < pref.length; j++){
            pre += words[i][j]
        }

        if(pref === pre){
            count++
        }
    }

    return count;
};