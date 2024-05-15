const Book = require('../model/Book');
const ResponseDto = require('../model/ResponseDto');

exports.getAll = (req, resp, next) => {
    let books = Book.getAll();
    resp.status(200).json(new ResponseDto(books));
}

exports.getById = (req, resp, next) => {
    let book = Book.getById(req.params.id);
    if (book) {
        resp.status(200).json(new ResponseDto(book));
    }
    else {
        resp.status(404).json(new ResponseDto(null, false, "Book doesn't exist"));
    }
}

exports.update = (req, resp, next) => {
    let book = Book.getById(req.params.id);
    if (book) {
        let bookReq = req.body;
        console.log(bookReq)
        const bookNew = new Book(book.id, bookReq.title, bookReq.isbn, bookReq.publishedDate,
            bookReq.author);
        bookNew.update();
        resp.status(204).json();
    }
    else {
        resp.status(404).json(new ResponseDto(null, false, "Book doesn't exist"));
    }
}

exports.create = (req, resp, next) => {
    let bookReq = req.body;
    const book = new Book(crypto.randomUUID(), bookReq.title, bookReq.isbn, bookReq.publishedDate,
        bookReq.author);
    book.create();
    resp.status(201).json(new ResponseDto(book, true, "Book added successfully"));
}

exports.delete = (req, resp, next) => {
    let book = Book.getById(req.params.id);
    if (book) {
        book.delete();
        resp.status(200).json(new ResponseDto(null, true, "Book deleted successfully"));
    }
    else {
        resp.status(404).json(new ResponseDto(null, false, "Book doesn't exist"));
    }
}