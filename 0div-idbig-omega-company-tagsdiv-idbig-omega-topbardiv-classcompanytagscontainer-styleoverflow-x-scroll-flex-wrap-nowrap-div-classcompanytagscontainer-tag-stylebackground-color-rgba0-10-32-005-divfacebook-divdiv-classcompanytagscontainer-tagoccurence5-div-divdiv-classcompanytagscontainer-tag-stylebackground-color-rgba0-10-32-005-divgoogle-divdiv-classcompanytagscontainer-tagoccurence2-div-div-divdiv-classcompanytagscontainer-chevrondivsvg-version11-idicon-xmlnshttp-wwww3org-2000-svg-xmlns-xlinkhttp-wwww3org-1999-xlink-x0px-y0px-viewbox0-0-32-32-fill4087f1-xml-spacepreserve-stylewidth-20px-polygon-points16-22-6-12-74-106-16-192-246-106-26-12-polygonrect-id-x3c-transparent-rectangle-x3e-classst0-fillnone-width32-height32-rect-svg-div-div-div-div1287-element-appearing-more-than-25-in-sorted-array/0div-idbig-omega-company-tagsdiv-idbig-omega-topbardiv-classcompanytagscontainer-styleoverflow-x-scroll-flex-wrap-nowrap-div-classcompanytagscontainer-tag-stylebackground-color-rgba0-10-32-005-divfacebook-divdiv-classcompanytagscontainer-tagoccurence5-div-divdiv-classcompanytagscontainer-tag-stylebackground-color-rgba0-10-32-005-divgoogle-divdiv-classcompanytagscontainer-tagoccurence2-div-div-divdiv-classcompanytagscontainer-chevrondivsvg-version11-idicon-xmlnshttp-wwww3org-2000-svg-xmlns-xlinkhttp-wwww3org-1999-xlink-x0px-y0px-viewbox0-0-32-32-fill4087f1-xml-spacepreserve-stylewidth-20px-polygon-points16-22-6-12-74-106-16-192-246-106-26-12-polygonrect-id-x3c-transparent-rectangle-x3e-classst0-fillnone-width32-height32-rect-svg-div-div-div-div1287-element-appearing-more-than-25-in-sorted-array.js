/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
    let size = (arr.length)*(1/4)
    let lp = 0, hp = parseInt(size);
    while(hp < arr.length){
        console.log(arr[lp], arr[hp])
        if(arr[lp] == arr[hp]){
            return arr[lp]
        } else {
            lp++;
            hp++;
        }
    }
};