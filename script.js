
const myLibrary = [];
let bookNum = 0;
const bookGrid = document.querySelector("div.book-grid");

// Create a book object
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

// Create a card object
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

// Add the "Add Button" to the site
function createAddButton(){
    // Create Add Button for library
    let addButton = document.createElement("button");
    addButton.id = 'myBtn';
    bookGrid.appendChild(addButton);
    addButton.className = "book-card";
    addButton.style.color = "darkslategray";
    addButton.style.fontSize = "150px";
    addButton.innerHTML = "+";
    addButton.style.transitionDuration = "0.2s";
    addButton.addEventListener("mouseenter", function(event){
        event.target.style.backgroundColor = "white";
    }, false);
    addButton.addEventListener("mouseleave", function(event){
        event.target.style.transitionDuration = "0.2s";
        event.target.style.backgroundColor = "greenyellow";
    }, false);
    addButton.addEventListener("mousedown", function(event){
        event.target.style.transitionDuration = "0s";
        event.target.style.backgroundColor = "#e7e7e7";
    }, false);
    addButton.addEventListener("mouseup", function(event){
        event.target.style.backgroundColor = "white";
    }, false);

}

// Add the book passed in to the site
function addBookToLibrary(book){
    let newCard = createCard(book);
    bookGrid.appendChild(newCard);
}


// Initialize 3 books for testing
const book1 = new Book("Book 1", "Author 1", 1, true);
const book2 = new Book("Book 2", "Author 2", 2, false);
const book3 = new Book("Book 3", "Author 3", 3, true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

createAddButton();

// Get the modal
var modal = document.getElementById("addBookModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Add the three books to the site
for (let i = 0; i < myLibrary.length; i++){
    addBookToLibrary(myLibrary[i]);
}