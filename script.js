
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
    let deleteButton = document.createElement("button");
    let cardTitle = document.createElement("h3");
    let cardAuthor = document.createElement("h4");
    let cardPages = document.createElement("h5");
    let cardRead = document.createElement("h4");
    let buttonContainer = document.createElement("div");

    cardTitle.innerHTML = book.title;
    cardAuthor.innerHTML = "By " + book.author;
    cardPages.innerHTML = book.pages + " pages";
    if (book.read == true){
        cardRead.innerHTML = "Finished";
    }
    else{
        cardRead.innerHTML = "Not Finished";
    }


    newCard.appendChild(deleteButton);
    newCard.appendChild(cardTitle);
    newCard.appendChild(cardAuthor);
    newCard.appendChild(cardPages);
    newCard.appendChild(cardRead);
    newCard.appendChild(buttonContainer);

    newCard.style.display = "flex";
    newCard.style.flexDirection = "column";
    newCard.style.color = "darkslategray";
    newCard.style.justifyContent = "space-evenly";

    cardAuthor.style.flexGrow = "1";
    cardTitle.style.flexGrow = "1";
    cardPages.style.flexGrow = "1";
    cardRead.style.flexGrow = "1";
    //test commit

    cardTitle.style.alignContent = "center";
    cardAuthor.style.alignContent = "center";
    cardPages.style.alignContent = "center";
    cardRead.style.alignContent = "center";

    cardTitle.style.marginBottom = "0px";
    cardAuthor.style.marginTop = "0px";
    cardAuthor.style.marginBottom = "0px";
    cardPages.style.marginTop = "0px";
    cardRead.style.marginBottom = "0px";

    // Style button container
    let editButton = document.createElement("button");
    let toggleReadButton = document.createElement("button");
    buttonContainer.style.display = "flex";
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(toggleReadButton);
    
    buttonContainer.style.width = "100%";
    buttonContainer.style.flexGrow = "1";

    editButton.style.width = "50%";
    editButton.innerHTML = "Edit Book";

    toggleReadButton.style.width = "50%";
    toggleReadButton.innerHTML = "Toggle Read";

    // Style delete button
    deleteButton.style.flexGrow = "1";
    deleteButton.style.alignSelf = "flex-end";
    deleteButton.innerHTML = "Delete Book";
    

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