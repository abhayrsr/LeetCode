/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let  space = [], vowels = [];
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u' || s.charAt(i) == 'A' || s.charAt(i) == 'E' || s.charAt(i) == 'I' || s.charAt(i) == 'O' || s.charAt(i) == 'U'){
            space.push("!");
            vowels.push(s.charAt(i));
        } else {
            space.push(s.charAt(i));  
        }
    }
    vowels.sort();
    let counter = -1;
    for(let i = 0; i < space.length; i++){
        if(space[i] == "!"){
            counter++;
            space[i] = vowels[counter];
        }
    }
    
    return space.join('');
};