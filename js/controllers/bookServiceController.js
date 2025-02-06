var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs/promises';
class bookService {
    constructor() {
        this.filePath = 'data.json';
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fs.readFile(this.filePath, 'utf8');
                return JSON.parse(data);
            }
            catch (err) {
                throw new Error('error');
            }
        });
    }
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getBooks();
                data.push(book);
                yield fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
                return book;
            }
            catch (error) {
                throw new Error('error');
            }
        });
    }
    updateBook(bookIsbn, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getBooks();
                const index = data.findIndex(b => b.isbn === bookIsbn);
                if (index === -1) {
                    throw new Error('Book not found');
                }
                const updatedBook = Object.assign(Object.assign({}, data[index]), book);
                data[index] = updatedBook;
                yield fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
                return updatedBook;
            }
            catch (error) {
                throw new Error('error');
            }
        });
    }
    deleteBook(bookIsbn) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getBooks();
                const filterData = data.filter(b => b.isbn != bookIsbn);
                yield fs.writeFile(this.filePath, JSON.stringify(filterData, null, 2));
            }
            catch (error) {
                throw new Error('error');
            }
        });
    }
}
export default bookService;
