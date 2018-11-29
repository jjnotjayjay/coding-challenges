function doneOrNot(board){
  let boxCount = {}
  let boxNumber

  for (var i = 0; i < 9; i++) {
    let rowCount = {}
    let colCount = {}

    for (j = 0; j < 9; j++) {
      if (rowCount[board[i][j]] || colCount[board[j][i]]) return 'Try again!'
      else {
        rowCount[board[i][j]] = 1
        colCount[board[j][i]] = 1
      }

      if (0 <= i && i < 3 && 0 <= j && j < 3) boxNumber = 1
      if (0 <= i && i < 3 && 3 <= j && j < 6) boxNumber = 2
      if (0 <= i && i < 3 && 6 <= j && j < 9) boxNumber = 3
      if (3 <= i && i < 6 && 0 <= j && j < 3) boxNumber = 4
      if (3 <= i && i < 6 && 3 <= j && j < 6) boxNumber = 5
      if (3 <= i && i < 6 && 6 <= j && j < 9) boxNumber = 6
      if (6 <= i && i < 9 && 0 <= j && j < 3) boxNumber = 7
      if (6 <= i && i < 9 && 3 <= j && j < 6) boxNumber = 8
      if (6 <= i && i < 9 && 6 <= j && j < 9) boxNumber = 9

      if (boxCount[boxNumber * 10 + board[i][j]]) return 'Try again!'
      else {
        boxCount[boxNumber * 10 + board[i][j]] = 1
      }
    }
  }
  return 'Finished!'
}
