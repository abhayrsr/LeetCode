/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    let binary = '';
    if (n == 0) return 0;
    while(n !== 1){
        let rem = parseInt(n%2);
        binary += rem;
        n = parseInt(n/2);
    }
    
    for(let i = 0; i < binary.length; i++){
        if(binary[i] == '1'){
            sum+=1;
        }
    }
    return sum+1;

};