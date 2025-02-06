export const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};
export const errorHandler = (err, res) => {
    res.status(500).json({ message: err });
};
