/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    let pre = '', suff = '';

    for(let i = 0; i < words.length; i++){
        let length = words[i].length;
        for(let j = i+1; j < words.length; j++){
           
             for(let k = 0; k < length; k++){
                pre += words[j][k]
            }

            for(let k = words[j].length - length; k < words[j].length; k++){
                suff += words[j][k]
            }

            // console.log(words[i], pre, suff)

            if((words[i] === pre) && (pre === suff)){
                count++
            }
            
           
           pre = ''
           suff = ''
        }
    }

    return count;
};