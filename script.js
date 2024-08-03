
const myLibrary = [];
let bookNum = 0;
const bookGrid = document.querySelector("div.book-grid");

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

function createCard(book){
    // Create the card div
    let newCard = document.createElement("div");
    newCard.className = "book-card";
    newCard.setAttribute("book-num", bookNum);
    bookNum = bookNum + 1;

    // Create the elements to display the book information
    let cardTitle = document.createElement("h3");
    let cardAuthor =document.createElement("h4");
    let cardPages = document.createElement("h5");
    let cardRead = document.createElement("h4");

    cardTitle.innerHTML = book.title;
    cardAuthor.innerHTML = "By " + book.author;
    cardPages.innerHTML = book.pages + " pages";
    if (book.read == true){
        cardRead.innerHTML = "Finished";
    }
    else{
        cardRead.innerHTML = "Not Finished";
    }


    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardPages);
    newCard.appendChild(cardRead);

    newCard.style.display = "flex";
    newCard.style.flexDirection = "column";
    newCard.style.color = "darkslategray";
    newCard.style.justifyContent = "space-evenly";

    cardTitle.style.flexShrink = "1";
    cardAuthor.style.flexShrink = "2";
    cardPages.style.flexShrink = "1";
    cardRead.style.flexShrink = "2";

    return newCard;

}

const book1 = new Book("Book 1", "Author 1", 1, true);
const book2 = new Book("Book 2", "Author 2", 2, false);
const book3 = new Book("Book 3", "Author 3", 3, true);


function addBookToLibrary(book){
    myLibrary.push(book);
    let newCard = createCard(book);
    bookGrid.appendChild(newCard);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);