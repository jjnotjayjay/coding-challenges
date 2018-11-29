function doneOrNot(board){
  let boxCount = {}

  for (var i = 0; i < 9; i++) {
    let rowCount = {}
    let colCount = {}

    for (j = 0; j < 9; j++) {
      let boxNumber = Math.floor(i / 3) + Math.floor(j / 3) * 3

      if (rowCount[board[i][j]] || 
          colCount[board[j][i]] ||
          boxCount[boxNumber * 10 + board[i][j]]) return 'Try again!'
      else {
        rowCount[board[i][j]] = 1
        colCount[board[j][i]] = 1
        boxCount[boxNumber * 10 + board[i][j]] = 1
      }
    }
  }
  return 'Finished!'
}
