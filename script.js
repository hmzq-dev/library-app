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

function addBookToLibrary() {
    let title = prompt("Enter title");
    let author = prompt("Enter author");
    let numberOfPages = prompt("Enter number of pages");
    let read = prompt("Is the book read or not");
    let newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
}

