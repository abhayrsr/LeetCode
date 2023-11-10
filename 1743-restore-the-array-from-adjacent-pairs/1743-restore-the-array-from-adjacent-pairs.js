/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const graph = new Map();

    for(const [v,w] of adjacentPairs){
        if(!graph.has(v)) graph.set(v, []);
        if(!graph.has(w)) graph.set(w, []);
        graph.get(v).push(w);
        graph.get(w).push(v);
    }

    let result = [];

    for(const [node, neighbour] of graph.entries()){
        if(neighbour.length === 1){
            result.push(node, neighbour[0]);
            break;
        }
    }

    while(result.length <= adjacentPairs.length){
        let [prev, last] = [result[result.length-2], result[result.length-1]];
        let condition = graph.get(last);
        let nextElement = condition[0] !== prev ? condition[0] : condition[1];
        result.push(nextElement);
    }

    return result;
};