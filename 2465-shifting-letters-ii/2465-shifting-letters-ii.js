var shiftingLetters = function(s, shifts) {
    let diff = Array(s.length + 1).fill(0);

    for(let i = 0; i < shifts.length; i++){
        diff[shifts[i][0]] += shifts[i][2] === 1 ? 1 : -1;
        diff[shifts[i][1] + 1] -= shifts[i][2] === 1 ? 1 : -1;
    }

    let currentShift = 0;
    let result = [];

    for(let i = 0; i < s.length; i++){
        currentShift += diff[i];
        let character = (s.charCodeAt(i) - 'a'.charCodeAt(0) + currentShift) % 26
        result.push(String.fromCharCode((character + 26) % 26 + 'a'.charCodeAt(0)))
    }

    return result.join("")    
};