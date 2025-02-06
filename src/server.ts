import express from 'express';
import bmsRoute from './routes/bmsRoute.js'
import { errorHandler, logger } from './middleware/logger.js';
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Logger middleware to log incoming requests
app.use(logger)

app.get('/', (req, res) => {
  res.send('hello');
})
app.use('/',bmsRoute)

// Error handling middleware to catch and send error messages as JSON responses
app.use(errorHandler)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
