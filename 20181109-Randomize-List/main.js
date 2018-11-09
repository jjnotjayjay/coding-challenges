function randomizeList(list) {
  const randomList = []
  const listCopy = list.slice()

  while (listCopy.length > 0) {
    const indexToAdd = Math.floor(Math.random() * listCopy.length)
    randomList.push(listCopy[indexToAdd])
    listCopy.splice(indexToAdd, 1)
  }

  return randomList
}
