import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 

app.get("/products", (req, res) => {
    res.send("Hello World from Express.js!");
});

app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
});
