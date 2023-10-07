const empty_cell = ".";

function isValidSudoku(board: string[][]): boolean {
    const uniq = new Set<string>();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const value = board[i][j];
            if (value === empty_cell) continue;

            const row_value = `row${i}${value}`;
            if (uniq.has(row_value)) return false
            uniq.add(row_value);

            const c_value = `col${j}${value}`;
            if (uniq.has(c_value)) return false
            uniq.add(c_value);

            const box_number = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const box_value = `box${box_number}${value}`;
            if (uniq.has(box_value)) return false
            uniq.add(box_value);
        }
    }

    return true;
};

console.log(isValidSudoku(
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
));
console.log(isValidSudoku(
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
));
