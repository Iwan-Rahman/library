let myLibrary = [];
let myLibraryByTitle = [];

function Book(title, author, pages, isRead){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book){
  myLibrary.push(book);
  myLibraryByTitle.push(book.title);
}

function displayLibrary(){
  let tableBody = document.querySelector("tbody");
  for(book of myLibrary){
    let bookRow = document.createElement("tr");
    for(property in book){
      let bookInfo  = document.createElement("td");

      if(property == "isRead"){
        let img = document.createElement("img");

        if(book[property]){
          img.setAttribute("src","./img/book-read.svg");
          img.setAttribute("alt","read");
        }else{
          img.setAttribute("src","./img/book-unread.svg");
          img.setAttribute("alt","unread");
        }

        bookInfo.appendChild(img);
      }else{
        bookInfo.textContent = book[property];        
      }

      bookRow.appendChild(bookInfo);
      // console.log(property + ": " + book[property]);
    }
    tableBody.appendChild(bookRow);
  }
}

function deleteMode(){
  bookRows = document.querySelectorAll("tbody > tr");
  if(bookRows[0].classList.contains("delete")){
    for(bookRow of bookRows){
      bookRow.classList.remove("delete");
    }
  }else{
    for(bookRow of bookRows){
      bookRow.addEventListener("click",(e) => {
        if(bookRows.length == 0 || e.currentTarget.classList.contains("delete")){
          let bookIndex = myLibraryByTitle.indexOf(e.currentTarget.querySelector("td").textContent);
          myLibrary.splice(bookIndex,1);
          myLibraryByTitle.splice(bookIndex,1);
          document.querySelector("tbody").replaceChildren();
          displayLibrary();
          deleteMode();
        }
      })
      bookRow.classList.add("delete");
    }
  }
}

// function updateAllBookStatus(isRead){
//   for(book of myLibrary){
//     book.isRead = isRead;
//   }
//   document.querySelector("tbody").replaceChildren();
//   displayLibrary();
// }


//Button Event Listeners
let btnAdd = document.querySelector("button");
let btnDelete = document.querySelector("tfoot td:nth-child(2) > button");
let btnDeleteAll = document.querySelector("tfoot td:nth-child(2) > button:nth-child(2)");
let btnReadAll = document.querySelector("tfoot td:nth-child(3) > button");
let btnUnreadAll = document.querySelector("tfoot td:nth-child(3) > button:nth-child(2)");

let formAddBook = document.querySelector(".form-container");
let btnFormAdd = document.querySelector("form button[type='button']");
let btnFormCancel = document.querySelector("form button[type='button']:last-child");

let inpTitle = document.querySelector("#bookTitle");
let inpAuthor = document.querySelector("#bookAuthor");
let inpPages = document.querySelector("#bookPages");

btnAdd.addEventListener("click", () => formAddBook.style.display = "flex");
btnFormCancel.addEventListener("click", () => formAddBook.style.display = "none");

btnFormAdd.addEventListener("click", () => {
  addBookToLibrary(new Book(inpTitle.value, inpAuthor.value, inpPages.value,false));
  document.querySelector("tbody").replaceChildren();
  displayLibrary();
  document.querySelector("form").reset();
})

let bookRows;

btnDelete.addEventListener("click", deleteMode)
btnDeleteAll.addEventListener("click",() => {
  myLibrary = [];
  myLibraryByTitle = [];
  document.querySelector("tbody").replaceChildren();
  displayLibrary();
})

// btnReadAll.addEventListener("click", () => updateAllBookStatus(true));
// btnUnreadAll.addEventListener("click", () => updateAllBookStatus(false));

// for(book of bookRows){
//   book.
// }

let x = new Book("Grumpy Cat","CatLover216x",30,false);
let y = new Book("Macbeth","Shakespeare",150,true);
let z = new Book("1984","George Orwell",300,false);
addBookToLibrary(x)
addBookToLibrary(y)
addBookToLibrary(z)
displayLibrary();