let myLibrary = [];

function Book(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = isRead;
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

let x = new Book("Grumpy Cat","CatLover216x",30,true);
let y = new Book("Macbeth","Shakespeare",150,true);
let z = new Book("1984","George Orwell",300,true);
addBookToLibrary(x)
addBookToLibrary(y)
addBookToLibrary(z)
displayLibrary();