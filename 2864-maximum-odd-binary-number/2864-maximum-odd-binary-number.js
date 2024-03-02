/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let finalString = '', noOfZero = '', noOfOne = '';
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == '1'){
            noOfOne += "1";
        } else {
            noOfZero += "0";
        }
    }
    
   if(noOfZero){
       for(let i = 1; i < noOfOne.length; i++){
           finalString += noOfOne.charAt(i);
       }
       return finalString+noOfZero+'1';
   } else {
       return noOfOne;
   }
};