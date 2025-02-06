# Book-Management-System
This project implements a basic backend for a Book Management System using Node and Express. It includes middleware for logging and error handling, along with RESTful endpoints for managing book data stored in data.json.

## Restful API
A RESTful API is an architectural style that uses HTTP methods to interact with resources. In this project, books are treated as resources, and the API follows REST principles:

- **GET** : Retrieve book data.
- **POST** : Add a new book.
- **PUT** : Update an existing book.
- **DELETE** : Remove a book.

## Middleware
Middleware functions in Express are functions that have access to the request, response, and the next function in the application's request-response cycle. They are used for:

- Logging request details.
- Handling errors.
- Processing request data before it reaches the endpoint.

## Technology Used:
- Node,Express
