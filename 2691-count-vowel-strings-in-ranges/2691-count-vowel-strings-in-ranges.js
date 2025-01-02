/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let space = [0]
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for(let i = 0; i < words.length; i++){
        if(vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])){
            space.push(space[i] + 1)
        } else {
            space.push(space[i])
        }
    }

    let answer = Array.from(queries.length)
    
    for(let i = 0; i < queries.length; i++){
        answer.push(space[queries[i][1] + 1] - space[queries[i][0]])
    }

    return answer;
};