/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:


There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:


There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions


A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.
*/

function doneOrNot(board){
  const rowsOK = board.every(row => new Set(row).size === row.length);
  const colsOK = board.every((row, i) =>{
    const col =  Array.from({length: 9}, (_, j) => board[j][i]);
    return new Set(col).size === col.length;
  })
  let squaresOK = true;
  for(let i = 0; i < 9; i+=3){
    for(let j = 0; j < 9; j+=3){
      const square = board.slice(i, i + 3).map(area => area.slice(j, j + 3));
      if(new Set([].concat(...square)).size !== 9) squaresOK = false;
    }
  }
  return rowsOK && colsOK && squaresOK? "Finished!" : "Try again!";
}