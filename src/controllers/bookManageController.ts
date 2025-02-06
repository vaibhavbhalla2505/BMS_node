import { RequestHandler } from "express";
import bookService from "./bookServiceController.js";

const service=new bookService();

export const getBook:RequestHandler=async (req,res)=>{
    try {
        const books=await service.getBooks();
        res.status(200).send({
            message:'Data fetch successful',
            success: true,
            data:books
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
}

export const addBook: RequestHandler = async (req, res) => {
    try {        
        const newBook = await service.addBook(req.body);

        res.status(200).send({
            message: "Data added successfully",
            success: true,
            data: newBook 
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
};
export const updateBook:RequestHandler = async(req, res) => {
    const ISBN=req.params.id;
    const {title,author,isbn,publicationDate,genre}=req.body;
    try {
        const updatedBook=await service.updateBook(ISBN,{title,author,isbn,publicationDate,genre});
        res.status(200).send({
            message:'Data updated successful',
            success: true,
            book: updatedBook
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
}
export const deleteBook:RequestHandler=async (req, res) => {
    const isbn=req.params.id;
    try {
        await service.deleteBook(isbn);
        res.status(200).send({
            message: 'Data deleted successfully',
            success: true,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error,
        });
    }
}