/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let left = 0, right = s.length - 1
    let count = 0;
    
    while(left <= right){
        if(s[left] === "1" && s[right] === "0"){
            [s[left], s[right]] = [s[right], s[left]]
            count += right - left;
            left++;
            right--;
        } else if(s[left] === "1" && s[right] === "1" ){
            right--;
        } else if(s[left] === "0" && s[right] === "0"){
            left++;
        } else {
            left++;
            right--;
        }
    }
    return count;
};