// src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Initialize dotenv to read and parse `.env` file contents into `process.env`.
dotenv.config();

// Instantiate an Express application and store it in the variable 'app'.
const app: Express = express();
const port = process.env.PORT || 5001;

// Apply CORS middleware to the Express app to allow cross-origin requests.
app.use(cors());

// Define a GET route on the root path ('/') that responds with a simple message.
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Start the Express app and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
