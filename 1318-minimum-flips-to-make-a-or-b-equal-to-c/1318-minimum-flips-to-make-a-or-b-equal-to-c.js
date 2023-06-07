/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let count = 0;
    let space1 = [], space2 = [], space3 = [];
    let q1 = a, q2 = b, q3 = c;
    
    while(q1 > 0){
        
        let r = parseInt(q1%2);
        space1.push(r);
         q1 = parseInt(q1/2);
        
    }
    
    
    while(q2 > 0){
        
        let r = parseInt(q2%2);
        space2.push(r);
         q2 = parseInt(q2/2);
        
    }
    
    
    while(q3 > 0){
        
        let r = parseInt(q3%2);
        space3.push(r);
         q3 = parseInt(q3/2);
        
    }
    
    let max = Math.max(space1.length, space2.length);
    let size = Math.max(max, space3.length);
    
    for(let i= 0; i < size; i++){
        
        if(space1[i] == undefined){
            space1.push(0);
        }
        
        if(space2[i] == undefined){
            space2.push(0);
        }
        
        if(space3[i] ==  undefined){
            space3.push(0);
        }
    }
    
    for(let i = 0; i < size; i++){
        if(space1[i] == 0 && space2[i] == 0){
            if(space3[i] == 1) count++;
        }
        
        else if(space1[i] == 0 && space2[i] == 1){
            if(space3[i] == 0) count++;
        }
        
        else if(space1[i] == 1 && space2[i] == 0){
            if(space3[i] == 0) count++;
        }
        
        else if(space1[i] == 1 && space2[i] == 1){
            if(space3[i] == 0) count = count + 2;
        }
    }
    
    return count;
};