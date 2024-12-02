import express from "express";
import dotenv from "dotenv";
import { appRouter } from "./src/app.router.js";
import { connectDB } from "./DB/connection.js";
dotenv.config();

const app = express();

// Use the PORT environment variable or default to 8080
const port = process.env.PORT || 8080;

app.use(express.json());

// Connect to the database
connectDB();

// Use the application router
appRouter(app, express);

// Start the server
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Set server timeout to 7 minutes (420000 milliseconds)
server.timeout = 420000;
