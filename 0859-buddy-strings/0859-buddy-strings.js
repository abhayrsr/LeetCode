/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */


var buddyStrings = function(s, goal) {
    
   // if(s === goal) return false;
    if(s.length === 1 || s.length !== goal.length) return false;
    if( s === goal )return s.length > new Set(s).size;
    
    let i1 = -1, i2 = -1;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            if(i1 === -1){
                i1 = i;
            } else if (i2 === -1){
                i2 = i;
            } else {
                return false;
            }
        }
    }
    
    return(i1 !== -1 && i2 !== -1 && s[i1] === goal[i2] && s[i2] === goal[i1]);
};