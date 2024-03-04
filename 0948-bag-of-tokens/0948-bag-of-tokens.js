/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let res = 0, score = 0;
    tokens.sort((a,b) => a-b);
    let l = 0, r = tokens.length - 1;
    
    while(l <= r){
        if(power >= tokens[l]){
            power -= tokens[l];
            l += 1;
            score += 1;
            res = Math.max(res, score);
        } else if(score > 0){
            power += tokens[r];
            r -= 1;
            score -= 1;
        } else {
            break;
        }
    }
    return res;
};