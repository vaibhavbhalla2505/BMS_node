var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bookService from "./bookServiceController.js";
const service = new bookService();
export const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield service.getBooks();
        res.status(200).send({
            message: 'Data fetch successful',
            success: true,
            data: books
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
});
export const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = yield service.addBook(req.body);
        res.status(200).send({
            message: "Data added successfully",
            success: true,
            data: newBook
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
});
export const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ISBN = req.params.id;
    const { title, author, isbn, publicationDate, genre } = req.body;
    try {
        const updatedBook = yield service.updateBook(ISBN, { title, author, isbn, publicationDate, genre });
        res.status(200).send({
            message: 'Data updated successful',
            success: true,
            book: updatedBook
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
});
export const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isbn = req.params.id;
    try {
        yield service.deleteBook(isbn);
        res.status(200).send({
            message: 'Data deleted successfully',
            success: true,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
});
