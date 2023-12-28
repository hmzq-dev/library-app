const bookContainer = document.querySelector(".books-container");
const addBookButton = document.querySelector(".add-book");
const addBookDialog = document.querySelector("dialog");
const addBookForm = document.querySelector("form");

const myLibrary = [
    new Book("Hobbit", "T.R.R Tolkien", 262, true),
    new Book("Harry Potter", "J.K Rowling", 354, false)
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

    let bookRead = document.createElement("p");
    bookRead.className = "read";
    bookRead.textContent = "Read: ";
    bookRead.textContent += book.read ? "Yes" : "No";

    // Add book info fields to their container
    bookInfoContainer.append(bookTitle, bookAuthor, bookNumberOfPages, bookRead);

    // Create book buttons
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    let toggleReadButton = document.createElement("button");
    toggleReadButton.className = "toggle-read";
    toggleReadButton.textContent = "Toggle Read";

    // Set event listeners on buttons
    deleteButton.addEventListener("click", (event) => {
        let bookSelectedIndex = event.target.parentNode.parentNode.getAttribute("data-index");
        myLibrary.splice(bookSelectedIndex, 1);
        refreshLibraryDisplay();
    });

    toggleReadButton.addEventListener("click", (event) => {
        let bookSelectedIndex = event.target.parentNode.parentNode.getAttribute("data-index");
        let bookSelected = myLibrary[bookSelectedIndex];
        bookSelected.read = !bookSelected.read;
        refreshLibraryDisplay();
    });

    // Add book buttons to their container
    bookButtonsContainer.append(deleteButton, toggleReadButton);

    // Add outer elements to DOM
    bookContainer.append(bookElement);
    bookElement.append(bookInfoContainer, bookButtonsContainer);
}


addBookButton.addEventListener("click", (event) => {
    addBookDialog.showModal();
});

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let submittedFormFields = event.target.elements;
    let title = submittedFormFields.title.value;
    let author = submittedFormFields.author.value;
    let numberOfPages = submittedFormFields.numberOfPages.value;
    let read = submittedFormFields.read.value;
    let newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
    addBookDialog.close();
    refreshLibraryDisplay();
})


refreshLibraryDisplay();

