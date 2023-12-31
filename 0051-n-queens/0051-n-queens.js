/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = Array(n).fill(0).map(_ => Array(n).fill('.'));
    
    function solve(board){
        const solutions = [];
        solveRec(0, solutions);
        return solutions;
    }
    
    function solveRec(col, solutions){
        if(col === n){
            const formattedSolution = board.map(row => row.join(''));
            solutions.push(formattedSolution);
            return;
        }
        
        for(let i = 0; i < n; i++){
            if(isSafe(i, col)){
                board[i][col] = 'Q';
                solveRec(col + 1, solutions);
                board[i][col] = '.';
            }
        }
    }

    function isSafe(row, col){
        for(let i = 0; i < col; i++){
            if(board[row][i] === 'Q')
                return false;
        }

        for(let i = row, j = col; i >= 0 && j >= 0; i--, j--){
            if(board[i][j] === 'Q')
                return false;
        }

        for(let i = row, j = col; j >= 0 && i < n; i++, j--){
            if(board[i][j] === 'Q')
                return false;
        }

        return true;
    }
    
    return solve(board);
};