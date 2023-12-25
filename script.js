const bookContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".add-book");

const myLibrary = [
    new Book("Hobbit", "Tolkien", 262, true),
    new Book("Harry Potter", "Rowling", 354, false)
];


function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}


function refreshLibraryDisplay() {
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }
    myLibrary.forEach(displayBook);
}


function displayBook(book) {
    // Create outer elements
    let bookElement = document.createElement("div");
    bookElement.className = "book";
    let bookInfoContainer = document.createElement("div");
    bookInfoContainer.className = "book-info-container";
    let bookButtonsContainer = document.createElement("div");
    bookButtonsContainer.className = "book-buttons-container";

    // Set id attribute on book
    bookElement.setAttribute("data-index", myLibrary.indexOf(book));

    // Create book info fields
    let bookTitle = document.createElement("h2");
    bookTitle.className = "title";
    bookTitle.textContent = book.title;

    let bookAuthor = document.createElement("p");
    bookAuthor.className = "author";
    bookAuthor.textContent = `Author: ${book.author}`;

    let bookNumberOfPages = document.createElement("p");
    bookNumberOfPages.className = "number-of-pages";
    bookNumberOfPages.textContent = `Number of Pages: ${book.numberOfPages}`;

    let bookStatus = document.createElement("p");
    bookStatus.className = "status";
    bookStatus.textContent = "Status: ";
    bookStatus.textContent += book.read ? "Read" : "Not Read";

    // Add book info fields to their container
    bookInfoContainer.append(bookTitle, bookAuthor, bookNumberOfPages, bookStatus);

    // Create book buttons
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    let toggleStatusButton = document.createElement("button");
    toggleStatusButton.className = "toggle-status";
    toggleStatusButton.textContent = "Toggle Status";

    // Set event listeners on buttons
    deleteButton.addEventListener("click", (event) => {
        let bookSelectedIndex = event.target.parentNode.parentNode.getAttribute("data-index");
        myLibrary.splice(bookSelectedIndex, 1);
        refreshLibraryDisplay();
    });

    toggleStatusButton.addEventListener("click", (event) => {

    });

    // Add book buttons to their container
    bookButtonsContainer.append(deleteButton, toggleStatusButton);

    // Add outer elements to DOM
    bookContainer.append(bookElement);
    bookElement.append(bookInfoContainer, bookButtonsContainer);
}


function addBookToLibrary() {
    let title = prompt("Enter title");
    let author = prompt("Enter author");
    let numberOfPages = prompt("Enter number of pages");
    let read = prompt("Is the book read or not");
    let newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
}


refreshLibraryDisplay();

