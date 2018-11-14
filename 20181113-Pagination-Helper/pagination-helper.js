function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() - 1 && pageIndex >= 0
    ? this.itemsPerPage
    : pageIndex === this.pageCount() - 1
      ? this.collection.length % this.itemsPerPage
      : -1
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex >= this.collection.length || itemIndex < 0
    ? -1
    : Math.floor(itemIndex / this.itemsPerPage)
}
