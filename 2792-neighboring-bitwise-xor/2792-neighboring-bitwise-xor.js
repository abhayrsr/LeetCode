/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let xor = 0;
    for(let val of derived){
        xor ^= val
    }

    return xor === 0
};