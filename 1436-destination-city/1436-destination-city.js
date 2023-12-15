/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let set = new Set()
    for(let i = 0; i < paths.length; i++){
        set.add(paths[i][0]);
    }
    
    for(let j = 0; j < paths.length; j++){
        if(!set.has(paths[j][1])){
            return paths[j][1];
        }
    }
};