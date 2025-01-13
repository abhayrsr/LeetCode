/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let space = Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        space[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        if( space[s.charCodeAt(i) - 'a'.charCodeAt(0)] > 2){
             space[s.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
        }
    }

    let count = 0;

    for(let i = 0; i < space.length; i++){
        if(space[i] !== 0){
            count += space[i];
        }
    }

    return count;

    

};