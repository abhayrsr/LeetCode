/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let array = s.split("");
    
    if(s === goal) return true;
  
   for(let i = 0; i < s.length; i++){
       if(s !== goal){
           let temp = array.shift()
           array.push(temp);
           let str = array.join("");
           if(str === goal){
               return true;
           }
       }
   }
       return false;
};