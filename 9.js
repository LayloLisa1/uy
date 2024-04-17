class Author {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}
class Book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.authors = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
            if (!this.authors.some(author => author.name === book.author.name)) {
                this.authors.push(book.author);
            }
            book.author.addBook(book);
        } else {
            throw new Error("Qo'shilgan obyekt Book klassiga tegishli emas.");
        }
    }
    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            const author = this.authors.find(author => author.name === book.author.name);
            if (author) {
                const bookIndex = author.books.indexOf(book);
                if (bookIndex !== -1) {
                    author.books.splice(bookIndex, 1);
                }
            }
        }
    }
    listBooks() {
        return this.books;
    }

    listAuthors() {
        return this.authors;
    }
    sortBooksByTitle() {
        return this.books.sort((a, b) => a.title.localeCompare(b.title));
    }

    filterBooksByAuthor(authorName) {
        return this.books.filter(book => book.author.name === authorName);
    }
}
const tolkien = new Author("J.R.R. Tolkien", 1892);
const hobbit = new Book("The Hobbit", tolkien, "George Allen & Unwin");
const rings = new Book("The Lord of the Rings", tolkien, "George Allen & Unwin");
const rowling = new Author("J.K. Rowling", 1965);
const harryPotter1 = new Book("Harry Potter and the Philosopher's Stone", rowling, "Bloomsbury");
const harryPotter2 = new Book("Harry Potter and the Chamber of Secrets", rowling, "Bloomsbury");
const library = new Library();
library.addBook(hobbit);
library.addBook(rings);
library.addBook(harryPotter1);
library.addBook(harryPotter2);
console.log("Kitoblar ro'yxati:", library.listBooks());
console.log("Mualliflar ro'yxati:", library.listAuthors());
console.log("Saralangan kitoblar:", library.sortBooksByTitle());
console.log("Rowlingning kitoblari:", library.filterBooksByAuthor("J.K. Rowling"));
