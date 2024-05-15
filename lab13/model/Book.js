let books = [
    {
        "id": 1,
        "title": "The Lord of the Rings",
        "isbn": "978-0261102694",
        "publishedDate": "1954-07-29",
        "author": "J. R. R. Tolkien"
    },
    {
        "id": 2,
        "title": "Pride and Prejudice",
        "isbn": "978-0140435288",
        "publishedDate": "1813",
        "author": "Jane Austen"
    },
    {
        "id": 3,
        "title": "To Kill a Mockingbird",
        "isbn": "978-0446310727",
        "publishedDate": "1960",
        "author": "Harper Lee"
    }
];
module.exports = class Book {
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author=author;
    }

    static getAll = () => {
        return books;
    }

    static getById = (id) => {
        return books.find(x => x.id == id);
    }

    update = () => {
        const index = books.findIndex(b => b.id == this.id);
        books.splice(index, 1, this);
        return this;
    }

    delete = () => {
        books = books.filter(b => b.id != this.id);
        return this;
    }

    create = () => {
        books.push(this);
    }
}

/*
Download the start-up project shoppingcart-server from class demo or you create everything from scrtach.
Run "npm install" under shoppingcart-server to get express package installed.
Implement the features below inside shoppingcart-server REST applicaiton
CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
A book has properties: id, title, ISBN, publishedDate, author
make proper changes in js files to implement the step 1 features
Use Postman to test your REST APIs

*/