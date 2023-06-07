/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let count = 0;
     while(a != 0 | b != 0 | c != 0){
         if((c & 1) == 1){
             if((a & 1) == 0 && (b & 1) == 0){
                 count++;
             }
         } else {
            count += (a & 1) + (b & 1);
         }
         
         a >>= 1;
         b >>= 1;
         c >>= 1;
     }
    
    return count;
};