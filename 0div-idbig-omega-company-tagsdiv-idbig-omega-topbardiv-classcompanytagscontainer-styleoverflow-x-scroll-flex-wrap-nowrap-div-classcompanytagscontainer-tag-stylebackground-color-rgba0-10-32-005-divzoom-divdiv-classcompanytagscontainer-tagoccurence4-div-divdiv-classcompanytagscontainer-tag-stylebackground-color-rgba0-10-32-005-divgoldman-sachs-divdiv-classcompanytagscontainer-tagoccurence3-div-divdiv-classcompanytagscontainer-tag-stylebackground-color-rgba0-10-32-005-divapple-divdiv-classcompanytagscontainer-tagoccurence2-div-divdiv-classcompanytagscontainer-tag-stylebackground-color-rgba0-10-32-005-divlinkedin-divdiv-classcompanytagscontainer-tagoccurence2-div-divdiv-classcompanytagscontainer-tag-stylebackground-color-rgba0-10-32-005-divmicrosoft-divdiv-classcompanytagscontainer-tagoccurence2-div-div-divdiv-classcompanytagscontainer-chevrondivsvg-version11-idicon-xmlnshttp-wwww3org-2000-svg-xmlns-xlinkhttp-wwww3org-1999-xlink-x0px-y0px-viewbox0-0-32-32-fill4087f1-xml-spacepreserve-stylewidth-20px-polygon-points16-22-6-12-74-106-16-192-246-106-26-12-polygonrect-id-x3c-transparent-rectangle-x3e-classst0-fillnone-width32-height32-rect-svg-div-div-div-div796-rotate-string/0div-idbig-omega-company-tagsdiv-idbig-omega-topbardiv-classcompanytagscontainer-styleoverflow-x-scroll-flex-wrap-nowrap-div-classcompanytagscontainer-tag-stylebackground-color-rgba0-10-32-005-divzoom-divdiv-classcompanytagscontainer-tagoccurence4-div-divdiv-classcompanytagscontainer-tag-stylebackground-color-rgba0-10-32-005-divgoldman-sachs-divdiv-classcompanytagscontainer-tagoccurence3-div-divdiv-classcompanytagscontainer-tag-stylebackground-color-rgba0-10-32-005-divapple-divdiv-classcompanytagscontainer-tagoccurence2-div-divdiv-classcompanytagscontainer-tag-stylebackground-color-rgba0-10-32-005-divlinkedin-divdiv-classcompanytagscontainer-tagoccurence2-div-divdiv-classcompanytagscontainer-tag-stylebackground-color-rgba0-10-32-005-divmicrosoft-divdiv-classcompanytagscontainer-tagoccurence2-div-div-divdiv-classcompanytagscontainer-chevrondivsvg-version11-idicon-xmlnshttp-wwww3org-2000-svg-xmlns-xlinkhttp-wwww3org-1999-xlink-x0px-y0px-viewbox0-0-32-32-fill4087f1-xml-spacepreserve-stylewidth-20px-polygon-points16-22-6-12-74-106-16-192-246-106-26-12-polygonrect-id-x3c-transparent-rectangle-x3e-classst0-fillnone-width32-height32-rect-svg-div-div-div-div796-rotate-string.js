/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let str= s
    if(s.length !== goal.length) return false;
    for(let i = 0; i < s.length; i++){
        str+=s.charAt(i);
    }
    if(str.includes(goal)) return true;
    else return false;
};