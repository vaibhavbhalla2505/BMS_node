import { RequestHandler } from "express";

export const logger:RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
 
 export const errorHandler:RequestHandler = (err,res) => {
    res.status(500).json({ message: err});
  };