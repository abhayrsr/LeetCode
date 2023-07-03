/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    if( s1 === s2 ) return true;
    let i1 = -1, i2 = -1;
    
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            if(i1 === -1){
                i1 = i;
            } else if (i2 === -1){
                i2 = i;
            } else {
                return false;
            }
        }
    }
    
    return(i1 !== -1 && i2 !== -1 && s1[i1] === s2[i2] && s1[i2] === s2[i1]);
};