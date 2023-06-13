/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let namesDsc = [];
    const map = new Map();
    for(let i = 0; i < names.length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    for(const height of heights){
        namesDsc.push(map.get(height));
    }
    return namesDsc;
   
};