
const myLibrary = [];
let bookGrid = document.querySelector("book-grid");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let output = this.title + ", by " + this.author + ", " + this.pages + " pages, ";
        if (this.read == true){
            output = output + "finished reading";
        }
        else{
            output = output + "not read yet";
        }
        return output;
    };
}

const book1 = new Book("Book 1", "Author 1", 1, true);
const book2 = new Book("Book 2", "Author 2", 2, false);
const book3 = new Book("Book 3", "Author 3", 3, true);

function addBookToLibrary(book){
    myLibrary.push(book);
}

function refreshLibrary(){
    bookGrid.replaceChild();
    for (let i = 0; i < myLibrary.length; i++){
        let newBook = document.createElement("div");
        newBook.className = "book";
    }
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);