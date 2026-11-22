/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solver(board, 0, 0);

    function solver(board, row, col) {
        if (row === 9) {
            return true;
        }

        let nextRow = row;
        let nextCol = col + 1;

        if (nextCol === 9) {
            nextRow = row + 1;
            nextCol = 0;
        }

        if (board[row][col] !== '.') {
            return solver(board, nextRow, nextCol);
        }

        for (let i = 1; i <= 9; i++) {

            if (safe(board, row, col, i)) {

                board[row][col] = String(i);

                if (solver(board, nextRow, nextCol)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    }

    function safe(board, row, col, val) {
        let ch = String(val);

        for (let i = 0; i < 9; i++) {
            if (board[row][i] === ch) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (board[i][col] === ch) {
                return false;
            }
        }

        let sr = Math.floor(row / 3) * 3;
        let sc = Math.floor(col / 3) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {
                if (board[i][j] === ch) {
                    return false;
                }
            }
        }

        return true;
    }
};