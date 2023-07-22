let myLibrary = [];

function Book(title, author, pages, isAvailable){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = isAvailable;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

function displayLibrary(){
  let tableBody = document.querySelector("tbody");
  for(book of myLibrary){
    let bookRow = document.createElement("tr");
    for(property in book){
      let bookInfo  = document.createElement("td");
      bookInfo.textContent = book[property]
      bookRow.appendChild(bookInfo);
      // console.log(property + ": " + book[property]);
    }
    tableBody.appendChild(bookRow);
  }
}