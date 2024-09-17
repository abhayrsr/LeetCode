/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let l, b, a = 0
    while(left <= right){
        l = Math.min(height[left], height[right])
        b = right - left
        a = Math.max(a, l * b)
        
        if(l === height[left]){
            left++
        } else {
            right--
        }
    }
    return a;
};