import book from "../bookType/type.js";
import fs from 'fs/promises';
class bookService{
    private filePath='data.json'
    async getBooks():Promise<book[]>{
        try {
            const data=await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            throw new Error('error')
        }
    }
    async addBook(book: book): Promise<book>{
        try {
            const data=await this.getBooks();
            data.push(book);
            await fs.writeFile(this.filePath, JSON.stringify(data,null,2));

            return book;
        } catch (error) {
            throw new Error('error')
        }   
    }
    async updateBook(bookIsbn: string, book: book): Promise<book>{
        try {
            const data=await this.getBooks();
            const index=data.findIndex(b=>b.isbn===bookIsbn);
            if(index===-1){
                throw new Error('Book not found');
            }
            const updatedBook={...data[index],...book}

            data[index]=updatedBook;
            await fs.writeFile(this.filePath, JSON.stringify(data,null,2));
            return updatedBook;
        } catch (error) {
            throw new Error('error')
        }
    }
    async deleteBook(bookIsbn:string):Promise<void>{
        try {
            const data=await this.getBooks();
            const filterData=data.filter(b=>b.isbn!=bookIsbn)
            await fs.writeFile(this.filePath, JSON.stringify(filterData,null,2));
        } catch (error) {
            throw new Error('error')
        }
    }
}
export default bookService;