/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let l = parseInt(s.length)/2
    let p1 = 0, p2 = l;
    let count1 = 0, count2 = 0;
 
    while(p1 < l){
        if(s[p1].toLowerCase() == 'a' || s[p1].toLowerCase() == 'e' || s[p1].toLowerCase() == 'i' || s[p1].toLowerCase() == 'o' || s[p1].toLowerCase() == 'u'){
            count1++;
        }
        
         if(s[p2].toLowerCase() == 'a' || s[p2].toLowerCase() == 'e' || s[p2].toLowerCase() == 'i' || s[p2].toLowerCase() == 'o' || s[p2].toLowerCase() == 'u'){
            count2++;
        }
        p1++;
        p2++;
    }
    
    if(count1 === count2) return true;
    else return false;
};